import firebase from 'react-native-firebase';
import Geocoder from 'react-native-geocoder';
import _ from 'lodash';
import { Config } from "@common";
import uuid from 'uuid';

class FirebaseAPI {
    createNewData(table, details, callback) {
        var newPostKey = firebase.database().ref().child(table).push().key;
        const newRef = firebase.database().ref().child(table);
        details['id'] = newPostKey
        newRef.child(newPostKey).update({ ...details })
            .then(() => {
                callback(true, details, null)
            })
            .catch((error) => {
                console.log(error)
                callback(false, null, { message: error })
            });
    };

    updateData(table, data, callback) {
        firebase.app().database().ref(table).update(data)
            .then(() => callback(true, data, null))
            .catch((error) => {
                console.log(error)
                callback(false, null, { message: error })
            });
    };

    getData(table, callback) {
        firebase.app().database().ref(table).once('value')
            .then((snapshot) => {
                callback(true, snapshot.val(), null);
            })
            .catch((error) => {
                console.log(error)
                callback(false, null, { message: error })
            });
    };

    checkAuth(callback) {
        firebase.auth().onAuthStateChanged(user => callback(user))
    };

    updateToken(uid, callback) {
        firebase.messaging().getToken()
            .then(fcmToken => {
                if (fcmToken) {
                    this.updateData('users/' + uid, { 'deviceId': fcmToken }, (success, data, error) => {
                        if (success) {
                            callback(true, data, null);
                        } else {
                            callback(false, null, error)
                        }
                    })
                }
            })
    };

    authPhone(details, callback) {
        const { mobile } = details;
        firebase.auth().signInWithPhoneNumber(mobile)
            .then((confirmResult) =>
                callback(true, confirmResult, null))
            .catch((error) => {
                console.log(error)
                callback(false, null, { message: error })
            });
    };

    verificationCode(details, callback) {
        const { confirmResult, verificationCode } = details;
        confirmResult.confirm(verificationCode)
            .then((user) => {
                this.getUser(user._user, callback)
            })
            .catch((error) => {
                console.log(error)
                callback(false, null, { message: error })
            });
    };

    getUser(user, callback) {
        firebase.database().ref('users').child(user.uid).once('value')
            .then((snapshot) => {
                const exists = (snapshot.val() !== null);
                if (exists) {
                    callback(true, snapshot.val(), null);
                } else {
                    callback(true, user, null);
                }
            })
            .catch((error) => {
                console.log(error)
                callback(false, null, { message: error })
            });
    };

    uploadFile(file, path, callback) {
        var uploadTask = firebase.storage().ref().child(path + '/' + uuid.v4()).put(file.uri, { contentType: 'image/jpeg' });
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED:
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING:
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':
                        break;
                }
                callback(false, null, error)
            }, function () {
                firebase.storage().ref().child(uploadTask.path).getDownloadURL().then(function (url) {
                    callback(true, url, null);
                })
            });
    };

    // Customer
    getActiveEmployee(callback) {
        firebase.app().database().ref('activeEmployee').on("value", (snapshot) => {
            callback(true, snapshot.val(), null);
        }, (errorObject) => {
            console.log(error)
            callback(false, null, { message: errorObject.code })
        });
    };

    createBooking(details, callback) {
        this.createNewData('allBookings', details, (success, data, error) => {
            if (success) {
                callback(true, data, null)
                this.asignBooking(data, callback)
            }
            else if (error) {
                console.log(error)
                callback(false, null, { message: error })
            }
        })
    };

    asignBooking(details, callback) {
        this.getData('allBookings/' + details.id, (success, data, error) => {
            if (success && !data.employeeId) {
                this.getNearByUserCars(details, (success, data, error) => {
                    if (success) {
                        let sortByDistance = _.sortBy(data, 'distance')
                        if (sortByDistance && sortByDistance.length != 0) {
                            let randomNumber = Math.floor(Math.random() * (sortByDistance.length))

                            // Update Book
                            let updateemployeeID = { 'status': 'waiting', 'employeeId': sortByDistance[randomNumber].uid }
                            this.updateData('allBookings/' + details.id, updateemployeeID, (success, data, error) => {
                                if (success) {

                                    // Update Employee
                                    let updateNewBook = { 'newBook': details.id }
                                    this.updateData('activeEmployee/' + sortByDistance[randomNumber].uid, updateNewBook, (success, data, error) => {
                                        if (success) {
                                            console.log(data)
                                        }
                                        else if (error) {
                                            console.log(error)
                                            callback(false, null, { message: error })
                                        }
                                    });
                                }
                                else if (error) {
                                    console.log(error)
                                    callback(false, null, { message: error })
                                }
                            });
                        }
                    }
                    else if (error) {
                        console.log(error)
                        callback(false, null, { message: error })
                    }
                });
            }
            else if (error) {
                console.log(error)
                callback(false, null, { message: error })
            }
        });
    }

    cancelBooking(details, callback) {
        // Update Book
        let updateemployeeID = { 'status': 'cancel' }
        this.updateData('allBookings/' + details.id, updateemployeeID, (success, data, error) => {
            if (success) {
                // Update Employee
                let updateNewBook = { 'newBook': null }
                this.updateData('activeEmployee/' + details.employeeId, updateNewBook, (success, data, error) => {
                    if (success) {
                        callback(true, data, null)
                        console.log(data)
                    }
                    else if (error) {
                        console.log(error)
                        callback(false, null, { message: error })
                    }
                });
            }
            else if (error) {
                console.log(error)
                callback(false, null, { message: error })
            }
        });
    };

    conformBooking(details, callback) {
        // Update Book
        let updateemployeeID = { 'status': 'comform' }
        this.updateData('allBookings/' + details.id, updateemployeeID, (success, data, error) => {
            if (success) {

                // Update Employee
                let updateNewBook = { 'newBook': null }
                this.updateData('activeEmployee/' + details.employeeId, updateNewBook, (success, data, error) => {
                    if (success) {

                        // Update Emp Books
                        this.createNewData('users/' + details.employeeId + '/books', { 'bookId': details.id }, (success, data, error) => {
                            if (success) {
                                callback(true, data, null)
                                console.log(data)
                            }
                            else if (error) {
                                console.log(error)
                                callback(false, null, { message: error })
                            }
                        });

                        // Update Cus Books
                        this.createNewData('users/' + details.customerId + '/books', { 'bookId': details.id }, (success, data, error) => {
                            if (success) {
                                callback(true, data, null)
                                console.log(data)
                            }
                            else if (error) {
                                console.log(error)
                                callback(false, null, { message: error })
                            }
                        });

                    }
                    else if (error) {
                        console.log(error)
                        callback(false, null, { message: error })
                    }
                });
            }
            else if (error) {
                console.log(error)
                callback(false, null, { message: error })
            }
        });
    };

    async getNearByUserCars(details, callback) {
        this.getData('activeEmployee', async (success, data, error) => {
            if (success) {
                let drivers = []
                for (let item in data) {
                    if (data[item].isActive && !data[item].newBook) {
                        let distance = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${details.pickRegion.lng, details.pickRegion.lat}&destination=${data[item].region.latitude, data[item].region.longitude}&mode=${'Driving'}&key=${Config.apiKey}`)
                        let distanceJson = await distance.json();
                        data[item]['distance'] = await distanceJson.routes[0] ? distanceJson.routes[0].legs[0].distance.text : ''
                        await drivers.push(data[item])
                    }
                }
                callback(true, drivers, null);
            }
            else if (error) {
                console.log(error)
                callback(false, null, { message: error })
            }
        });
    }


    getActiveBook(id, callback) {
        firebase.app().database().ref('allBookings/' + id).on("value", (snapshot) => {
            callback(true, snapshot.val(), null);
        }, (errorObject) => {
            callback(false, null, { message: errorObject.code })
        });
    };

    // Employee
    getNewBooks(id, callback) {
        firebase.app().database().ref('activeEmployee/' + id).on("value", (snapshot) => {
            callback(true, snapshot.val(), null);
        }, (errorObject) => {
            console.log(error)
            callback(false, null, { message: errorObject.code })
        });
    };

    setActiveEmployee(user, callback) {
        const userRef = firebase.database().ref().child('activeEmployee');
        userRef.child(user.empId).update({ ...user })
            .then(() => callback(true, user, null))
            .catch((error) => callback(false, null, { message: error }));
    };

    conformBookingEmp(details, callback) {
        // Update Book
        let updateemployeeID = { 'status': 'waitingForCustomer' }
        this.updateData('allBookings/' + details.id, updateemployeeID, (success, data, error) => {
            if (success) {

            }
            else if (error) {
                console.log(error)
                callback(false, null, { message: error })
            }
        });
    };

    // asignBooking(details, callback) {
    //     let urlRef = firebase.database().ref('activeEmployee');
    //     var activeEmployee = []
    //     urlRef.once("value", function (snapshot) {
    //         snapshot.forEach(function (child) {
    //             if (child.val().isActive) {
    //                 activeEmployee.push(child.val())
    //             }
    //         });
    //         let randomEmp = activeEmployee[Math.floor(Math.random() * activeEmployee.length)]
    //         firebase.database().ref("activeEmployee/" + randomEmp.uid + '/customer').set(details).then(
    //             () => console.log('aaa')
    //         );
    //     });
    // };
    aceptBooking(details, callback) {
        firebase.database().ref("allBookings/" + details.id + '/employee').set(details).then(
            () => console.log('bbb')
        );
    };

};
export default new FirebaseAPI();