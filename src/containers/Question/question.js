import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Form, Input, Label, Icon, CheckBox } from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { Color } from '@common'

export default class Question extends React.Component {
    static navigationOptions = ({ navigation }) => ({        
        header: null      
    })
    render() {
        return (
            <View behavior="padding" style={styles.container}>
                <View style={styles.headerBg}>
                    <Text style={styles.headerTitle}>Question #1</Text>
                </View>
                <View style={styles.contentArea}>
                    <View style={styles.subHeader}>
                        <TouchableOpacity style={styles.iconBox}>
                            <Icon name='pause' style={styles.headerIcons} />
                            <Text style={styles.headerIcontxt}>Pause</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconBox}>
                            <Icon name='alarm' style={styles.headerIcons} />
                            <Text style={styles.headerIcontxt}>00:05:08</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconBox}>
                            <CheckBox checked={true} />
                            <Text style={styles.headerIcontxt}>Finish</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.questionBox}>
                        <Text style={styles.questionTitle}>Louis pasteur first developed his pasteurization process to preserve wine</Text>
                        <View>
                            <TouchableOpacity style={styles.qstOption}>
                                <Text style={styles.qstBtn}>A</Text>
                                <Text style={styles.qstBtnTxt}>True</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.qstOption}>
                                <Text style={styles.qstBtnActive}>B</Text>
                                <Text style={styles.qstBtnTxt}>False</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.footerArea}>
                        <View>
                        <TouchableOpacity style={styles.footerBtn}>
                            <Text style={styles.footerBtnTxt}>PREV</Text>
                        </TouchableOpacity>
                        </View>
                        <View>
                        <TouchableOpacity style={styles.footerBtn}>
                            <Text style={styles.footerBtnTxt}>NEXT</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
        flex: 1,
        padding: 10,
        backgroundColor: Color.greyBg,
    },
    subHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: Color.white,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#DEDEDE',
        marginBottom: 30,
    },
    headerIcons: {
        fontSize: 22,
        color: Color.greyIcon,
    },
    headerIcontxt: {
        color: Color.greyIcon,
        paddingLeft: 15,
    },
    iconBox: {
        flexDirection: 'row',
    },
    questionBox: {
        flex:3,
    },
    qstOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    questionTitle: {
        fontSize: 18,
        color: Color.greyTxt,
        borderBottomWidth: 1,
        borderColor: Color.greyTxt,
        paddingBottom: 5,
        marginBottom: 15,
    },
    qstBtn: {
        backgroundColor: Color.greyIcon,
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: Color.white,
    },
    qstBtnActive:{
        backgroundColor:Color.activeBtn,
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: Color.white,
    },
    qstBtnTxt: {
        fontSize: 18,
        color: Color.greyTxt,
        paddingLeft: 15,
    },
    footerArea: {        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',            
    },
    footerBtn:{
        backgroundColor:Color.primary,
        width:155,
        paddingVertical:10,
    },    
    footerBtnTxt:{
        fontSize:18,
        color:Color.white,
        textAlign:'center',
    },
});
