import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Form, Textarea } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Color } from '@common'

export default class FinishPopup extends React.Component { 
       render() {
           const {onPress}=this.props
        return (
            <View style={styles.container}>                
                <Text style={styles.popupTitle}>Finish</Text>
                <Text style={styles.confirmTxt}>Are you sure you want to submit the test ?</Text>   
                <View style={styles.btnArea}>
                <TouchableOpacity style={styles.loginButt} onPress={onPress}>
                            <Text style={styles.loginButtTxt}>RESUME</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButt} onPress={onPress}>
                            <Text style={styles.loginButtTxt}>FINISH</Text>
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
        paddingBottom:20,
    },
    loginButt: {
        backgroundColor: Color.primary,
        paddingVertical: 15,
        paddingHorizontal:30,             
    },
    loginButtTxt: {
        fontSize: 18,
        color: Color.white,
        textAlign: 'center',
    },
    messageBox:{
        backgroundColor:Color.white,
    },
    confirmTxt:{
        backgroundColor:Color.white,
        fontSize:24,
        color:Color.greyTxt,
        paddingHorizontal:20,
        paddingVertical:30,
        textAlign:'center',
        marginBottom:20,
    },
    btnArea:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    
});
