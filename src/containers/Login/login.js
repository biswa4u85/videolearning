import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Form, Input, Label } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Color } from '@common'

const INIT_STATE = {
    Email: '',
    Mobile: '',
    Password: '',
}
export default class Login extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })

    constructor(props) {
        super(props);
        this.state = { ...INIT_STATE };
    }

    render() {

        const { Email, Mobile, Password, } = this.state;

        return (
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={20} style={styles.container}>
                <ScrollView>
                    <View style={styles.headerBg}>
                        <Text style={styles.headerTitle}>Mobile Learning App</Text>
                    </View>
                    <View style={styles.subTitle}>
                        <Text style={styles.subTitleTxt}>LOG IN</Text>
                    </View>
                    <View style={styles.fbArea}>
                        <TouchableOpacity style={styles.fbLink}>
                            <Text style={styles.fbTxt}>Log in with Facebook</Text>
                        </TouchableOpacity>
                        <Text style={styles.orTxt}>OR</Text>
                    </View>

                    <Form style={styles.loginForm}>
                        <TextField
                            label='Email id / mobile no'
                            baseColor={Color.primary}
                            tintColor={Color.primary}
                            // onEndEditing={() => this.ref.password && this.ref.password.focus()}
                            labelHeight={26}
                            fontSize={18}
                            lineWidth={2}
                            value={Email}
                            onChangeText={(Email) => this.setState({ Email })}
                        />
                        <TextField
                            label='Password'
                            // ref='password'
                            baseColor={Color.primary}
                            tintColor={Color.primary}
                            labelHeight={26}
                            fontSize={18}
                            lineWidth={2}
                            value={Password}
                            onChangeText={(Password) => this.setState({ Password })}
                        />
                    </Form >

                    <View style={styles.fbArea}>
                        <TouchableOpacity style={styles.loginButt} onPress={() => this.props.navigation.navigate('Index')}>
                            <Text style={styles.loginButtTxt}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footerArea}>
                        <TouchableOpacity style={styles.footerLink} onPress={() => this.props.navigation.navigate('ForgotPass')}>
                            <Text style={styles.footerLinkTxt}>Forgot Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerLink} onPress={() => this.props.navigation.navigate('Index')}>
                            <Text style={styles.footerLinkTxt}>Skip (1)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footerLink} onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style={styles.footerLinkTxt}>Sign Up</Text>
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
    headerBg: {
        backgroundColor: Color.primary,
        paddingTop: 35,
        paddingBottom: 15,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.white,
    },
    subTitle: {
        paddingTop: 15,
        paddingBottom: 25,
    },
    subTitleTxt: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Color.primary,
        textAlign: 'center',
    },
    fbArea: {

    },
    fbLink: {
        backgroundColor: Color.fbBg,
        paddingVertical: 15,
        borderRadius: 3,
        marginHorizontal: 40,
    },
    fbTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.white,
        textAlign: 'center',
    },
    orTxt: {
        fontSize: 20,
        color: Color.primary,
        paddingTop: 15,
        textAlign: 'center',
    },
    loginForm: {
        marginHorizontal: 40,
    },
    loginButt: {
        backgroundColor: Color.primary,
        paddingVertical: 15,
        marginHorizontal: 40,
        marginVertical: 30,
    },
    loginButtTxt: {
        fontSize: 18,
        color: Color.white,
        textAlign: 'center',
    },
    footerArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 10,
    },
    footerLink: {

    },
    footerLinkTxt: {
        fontSize: 18,
        color: Color.primary,
    },
});
