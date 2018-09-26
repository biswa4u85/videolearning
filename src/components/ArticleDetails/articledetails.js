import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Form, Input, Label } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Color, Styles } from '@common'

export default class ArticleDetails extends React.Component {
    static navigationOptions = ({ navigation,state }) => ({
        headerTitle: 'Facts about Valentines\'s Day',
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
                   
                    <ScrollView style={styles.contentArea}>
                        <View style={styles.contSection}>
                            <Text style={styles.contTitle}>Lorem Ipsum has been the industry's standard dummy </Text>
                            <Text style={styles.contTitle}>1. Industry's standard dummy </Text>
                            <Image style={styles.contImg} source={require('../images/img1.jpg')} />
                            <Text style={styles.contentTxt}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
                        </View>
                        <View style={styles.contSection}>                            
                            <Text style={styles.contTitle}>2. Industry's standard dummy </Text>
                            <Image style={styles.contImg} source={require('../images/img1.jpg')} />
                            <Text style={styles.contentTxt}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
                        </View>
                        <View style={styles.contSection}>                            
                            <Text style={styles.contTitle}>3. Industry's standard dummy </Text>
                            <Image style={styles.contImg} source={require('../images/img1.jpg')} />
                            <Text style={styles.contentTxt}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
                            <Text style={styles.contentTxt}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
                        </View>
                    </ScrollView>                
            </View>
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
        elevation: 1,
    },
    headerTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: Color.white,
    },
    contentArea: {        
        padding: 15,
    },
    contSection: {
        marginBottom:15,
    },
    contTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.black,
        lineHeight: 20,
        marginBottom: 10,
    },
    contentTxt: {
        fontSize: 14,
        color: Color.black,
        lineHeight: 20,
        marginBottom:10,
    },
    contImg:{
        width:null,
        height:200,
        marginBottom:10,
    }
});
