import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Form, Input, Label } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Color, Styles } from '@common'

export default class ForgotPass extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Forgot Password',
        // headerLeft: null,
        headerRight: null,
        headerTintColor: Color.white,
        headerStyle: Styles.headerBg,
        headerTitleStyle: Styles.headerTitle,
    })
    state = {
        Email: '',
    };

    render() {

        const { Email } = this.state;

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <ScrollView>
                    <Form style={styles.loginForm}>
                        <TextField
                            label='Email id'
                            baseColor={Color.primary}
                            tintColor={Color.primary}
                            labelHeight={26}
                            fontSize={18}
                            lineWidth={2}
                            value={Email}
                            onChangeText={(Email) => this.setState({ Email })}
                        />
                    </Form >

                    <View style={styles.fbArea}>
                        <TouchableOpacity style={styles.loginButt} onPress={() => this.props.navigation.navigate('Index')}>
                            <Text style={styles.loginButtTxt}>SUBMIT</Text>
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

    headerTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: Color.white,
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

});
