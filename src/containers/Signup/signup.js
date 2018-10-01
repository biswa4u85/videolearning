import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Form, Input, Label, Icon } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView, } from 'react-native';
import { Color, Styles } from '@common'

export default class Signup extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Sign Up',
        // headerLeft: null,
        headerRight:null,
        headerTintColor: Color.white,
        headerStyle:Styles.headerBg,
        headerTitleStyle:Styles.headerTitle,
    })
    state = {
        Name: '',
        Email: '',
        Mobile: '',
        Password: '',
    };

    render() {

        const { Email, Name, Mobile, Password } = this.state;

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <ScrollView>
                    <Form style={styles.loginForm}>
                        <TextField
                            label='Name'
                            baseColor={Color.primary}
                            tintColor={Color.primary}
                            labelHeight={26}
                            value={Name}
                            onChangeText={(Name) => this.setState({ Name })}
                        />
                        <TextField                        
                            label='Email Address'
                            baseColor={Color.primary}
                            tintColor={Color.primary}
                            labelHeight={26}
                            value={Email}
                            onChangeText={(Email) => this.setState({ Email })}
                        />
                        <TextField
                            label='Mobile Number'
                            baseColor={Color.primary}
                            tintColor={Color.primary}
                            labelHeight={26}
                            value={Mobile}
                            onChangeText={(Mobile) => this.setState({ Mobile })}
                        />
                        <TextField
                            label='Password'
                            baseColor={Color.primary}
                            tintColor={Color.primary}
                            labelHeight={26}
                            value={Password}
                            onChangeText={(Password) => this.setState({ Password })}
                        />
                    </Form >

                    <View style={styles.fbArea}>
                        <TouchableOpacity style={styles.loginButt} onPress={() => this.props.navigation.navigate('Index')}>
                            <Text style={styles.loginButtTxt}>SIGNUP</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    subTitle: {
        paddingTop: 15,
        paddingBottom: 25,
    },
    subTitleTxt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.primary,
        textAlign: 'center',
    },

    loginForm: {
        marginHorizontal: 40,
    },
    loginButt: {
        backgroundColor: Color.primary,
        paddingVertical: 15,
        marginHorizontal: 40,
        marginVertical: 25,
    },
    loginButtTxt: {
        fontSize: 18,
        color: Color.white,
        textAlign: 'center',
    },
    backIcon: {
        color: '#fff',
        fontSize: 32,
        paddingRight: 30,
    },
});
