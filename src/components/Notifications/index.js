import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Form, Input, Label } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Color, Styles } from '@common'

export default class Notifications extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Notification',
        // headerLeft: null,
        headerRight: null,
        headerTintColor: Color.white,
        headerStyle: Styles.headerBg,
        headerTitleStyle: Styles.headerTitle,
    })

    render() {
        return (
            <View style={styles.container}>                   
                    <ScrollView style={styles.contentArea}>
                        <View style={styles.contSection}>
                            <Text></Text>
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
});
