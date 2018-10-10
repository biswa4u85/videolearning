import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Form, Input, Label } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Color, Styles } from '@common'

export default class ArticleDetails extends React.Component {
    static navigationOptions = ({ navigation,state }) => ({
        headerTitle: 'All List',
        // headerLeft: null,
        headerRight: null,
        headerTintColor: Color.white,
        headerStyle: Styles.headerBg,
        headerTitleStyle: Styles.headerTitle,
    })
    constructor() {
        super();
        this.state = {
            articleDetail:'articleone',
        };

    }
    render() {
        return (
            <View behavior="padding" style={styles.container}>          
                   
                    <ScrollView style={styles.contentArea} showsVerticalScrollIndicator={false}>
                        <View style={styles.contSection}>                            
                            <Text style={styles.contTitle}>Industry's standard dummy </Text>
                            <Image style={styles.contImg} source={require('../images/img1.jpg')} /> 
                            <Text style={styles.conTTxt}>Industry's standard dummy </Text>                           
                        </View> 
                        <View style={styles.contSection}>                            
                            <Text style={styles.contTitle}>Industry's standard dummy </Text>
                            <Image style={styles.contImg} source={require('../images/img1.jpg')} /> 
                            <Text style={styles.conTTxt}>Industry's standard dummy </Text>                           
                        </View>
                        <View style={styles.contSection}>                            
                            <Text style={styles.contTitle}>Industry's standard dummy </Text>
                            <Image style={styles.contImg} source={require('../images/img1.jpg')} /> 
                            <Text style={styles.conTTxt}>Industry's standard dummy </Text>                           
                        </View>
                        <View style={styles.contSection}>                            
                            <Text style={styles.contTitle}>Industry's standard dummy </Text>
                            <Image style={styles.contImg} source={require('../images/img1.jpg')} /> 
                            <Text style={styles.conTTxt}>Industry's standard dummy </Text>                           
                        </View>                       
                    </ScrollView>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,       
    },
    headerBg: {               
        backgroundColor: Color.primary,
        paddingTop: 35,
        paddingBottom: 15,
        paddingHorizontal: 20,
        elevation: 1,
    },
    headerTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: Color.white,
    },
    contentArea: {      
        
    },
    contSection: {
        marginBottom:5,
        elevation:1,
        paddingHorizontal:10,
        borderColor:Color.grey,
        borderBottomWidth:1,         
        // backgroundColor:Color.white,
    },
    contTitle: {
        fontSize: 20,        
        color: Color.black,
        lineHeight: 20,
        paddingVertical:15,      
    },  
    conTTxt:{
        fontSize: 14,        
        color: Color.black, 
        paddingVertical:10,            
    },  
    contImg:{
        width:null,
        height:200,        
    }
});
