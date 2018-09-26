import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Form, Textarea } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Color } from '@common'

export default class MessagePopup extends React.Component { 
       render() {
           const {onPress}=this.props
        return (
            <View style={styles.container}>                
                <Text style={styles.popupTitle}>Message</Text>
                    <Textarea style={styles.messageBox} rowSpan={5} bordered placeholder="Message" />
                <View>
                <TouchableOpacity style={styles.loginButt} onPress={onPress}>
                            <Text style={styles.loginButtTxt}>SEND MESSAGE</Text>
                </TouchableOpacity>
                </View>         
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor:Color.popupBg,
        padding:20,
    },
    popupTitle:{
        fontSize:28,
        fontWeight:'bold',
        color:Color.primary,
        textAlign:'center',
        paddingBottom:15,
    },
    loginButt: {
        backgroundColor: Color.primary,
        paddingVertical: 15,
        marginHorizontal: 40,
        marginTop: 15,
    },
    loginButtTxt: {
        fontSize: 18,
        color: Color.white,
        textAlign: 'center',
    },
    messageBox:{
        backgroundColor:Color.white,
        paddingVertical:10,
    }
    
});
