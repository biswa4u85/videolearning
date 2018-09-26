import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Form, Textarea } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { Color } from '@common'

export default class QuizPopup extends React.Component { 
       render() {
           const {onPress}=this.props
        return (
            <View style={styles.container}>                
                <View>
                    <Image style={styles.headerImg} source={require('../images/img4.jpg')} />
                    <Text style={styles.imgTxt}>Islands</Text>
                </View> 
                <View style={styles.detailsList}>
                    <Text style={styles.detailsListTxt}>Number Of Question:</Text>
                    <Text style={styles.detailsListTxt}>5</Text>
                </View>
                <View style={styles.detailsList}>
                    <Text style={styles.detailsListTxt}>Time (In Minutes):</Text>
                    <Text style={styles.detailsListTxt}>00:04:05</Text>
                </View> 
                <View style={styles.detailsList}>
                    <Text style={styles.detailsListTxt}>Total Marks:</Text>
                    <Text style={styles.detailsListTxt}>4</Text>
                </View> 
                <View style={styles.detailsList}>
                    <Text style={styles.detailsListTxt}>Marks for Correct Answer:</Text>
                    <Text style={styles.detailsListTxt}>1</Text>
                </View> 
                <View style={styles.detailsList}>
                    <Text style={styles.detailsListTxt}>Penalty for Wrong Answer:</Text>
                    <Text style={styles.detailsListTxt}>0.25</Text>
                </View>                   
                {/* <View style={styles.footerBtnArea}>
                <TouchableOpacity style={styles.footerHalfBtn} onPress={onPress}>
                    <Text style={styles.loginButtTxt}>UPDATE QUIZ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerHalfBtn} onPress={onPress}>
                    <Text style={styles.loginButtTxt}>RESUME</Text>
                </TouchableOpacity>
                </View>  */}
                <View>
                <TouchableOpacity style={styles.loginButt} onPress={onPress}>
                    <Text style={styles.loginButtTxt}>UPDATE QUIZ</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.loginButt} onPress={() => this.props.navigate('Question')}>
                    <Text style={styles.loginButtTxt}>START QUIZ</Text>
                </TouchableOpacity>                
                </View>        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor:Color.white,        
    },    
    headerImg:{
        width:null,
        height:120,   
    },
    imgTxt:{
        fontSize:14,
        fontWeight:'bold',
        color:'#1493C0',
        paddingVertical:10,
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderColor:'#AFAFAF',        
    },
    loginButt: {
        backgroundColor: Color.primary,
        paddingVertical: 12,
        marginTop:1,     
    },
    loginButtTxt: {
        fontSize: 18,
        color: Color.white,
        textAlign: 'center',
    },
    messageBox:{
        backgroundColor:Color.white,
        paddingVertical:10,
    },
    detailsList:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:10,
        paddingHorizontal:10,        
    },
    detailsListTxt:{
        fontSize:14,
        color:Color.black,
    },
    footerBtnArea:{
        flexDirection:'row',
    },
    footerHalfBtn:{
        backgroundColor: Color.primary,
        paddingVertical: 15,      
        width:'50%',
    }
    
});
