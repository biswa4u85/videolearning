import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions, } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, ScrollableTab } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import AutoHeightImage from 'react-native-auto-height-image';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
} from 'react-native-popup-dialog';
import QuizPopup from '../QuizPopup/'
import { Color } from '@common'

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

export default class Quiz extends React.Component {
    state = {
        dialogShow: false,
    };

    showScaleAnimationDialog = () => {
        this.scaleAnimationDialog.show();
    }

    showSlideAnimationDialog = () => {
        this.slideAnimationDialog.show();
    }

    showFadeAnimationDialog = () => {
        this.fadeAnimationDialog.show();
    }
    render() {
       
        return (            

            <ScrollView style={styles.container}>

                <PopupDialog
                    dialogStyle={{padding:10,backgroundColor: 'rgba(52, 52, 52, 0)'}}   
                    height={600}                 
                    ref={(popupDialog) => {
                        this.scaleAnimationDialog = popupDialog;
                    }}
                    dialogAnimation={scaleAnimation}>

                    <QuizPopup navigate={this.props.navigate}  onPress={() => { this.scaleAnimationDialog.dismiss(); }} />

                </PopupDialog>

                <View style={styles.bannerCont}>
                    {/* <ScrollView horizontal={true} pagingEnabled={true}> */}
                    <TouchableOpacity style={styles.bannerSliderBox}  onPress={this.showScaleAnimationDialog}>
                        <AutoHeightImage width={Dimensions.get('window').width} source={require('../images/img6.jpg')} />
                        <View style={styles.bannerQuote}>
                            <Text style={styles.bannerTxt}>Scientific Discoveries</Text>
                        </View>
                    </TouchableOpacity>
                    {/* </ScrollView> */}
                </View>

                <View styles={styles.thumbSlide}>
                    <View style={styles.sliderHeader}>
                        <Text style={styles.subTitle}>Random Quiz</Text>
                    </View>
                    <ScrollView style={styles.thumbSlider} horizontal={true}>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={this.showScaleAnimationDialog}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={this.showScaleAnimationDialog}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={this.showScaleAnimationDialog}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={this.showScaleAnimationDialog}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>            

            </ScrollView>
        );
    }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    bannerCont: {
        marginBottom: 20,
    },
    bannerSliderBox: {
        width: Dimensions.get('window').width - 20,
    },
    bannerQuote: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexWrap: 'wrap',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    bannerTxt: {
        fontSize: 14,
        color: '#fff',
    },
    hourTxt: {
        color: '#fff',
        fontSize: 12,
    },
    placeTxt: {
        color: '#27AE60',
        fontSize: 12,
    },


    /*** Thumbe Slide ****/
    thumbSlide: {
        marginBottom: 15,
    },
    sliderHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 5,
    },
    moreTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Color.primary,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        paddingVertical: 5,
    },
    thumbSlider: {
        marginBottom: 20,
    },
    thumbSlideBox: {
        backgroundColor: Color.white,
        marginRight: 10,
        borderRadius: 4,
        elevation: 1,
        width: 130,
        marginBottom: 1,
    },
    slideImg: {
        width: 130,
        height: 130,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    slideTxtArea: {
        flex: 1,
        paddingVertical: 5,
    },
    slideTitle: {
        fontSize: 12,
        color: Color.grey,
        paddingTop: 2,
        paddingBottom: 5,
        textAlign: 'center',
    },



    dialogContentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationBar: {
        borderBottomColor: '#b5b5b5',
        borderBottomWidth: 0.5,
        backgroundColor: '#000',
    },
    navigationTitle: {
        padding: 10,
    },
    navigationButton: {
        padding: 10,
    },
    navigationLeftButton: {
        paddingLeft: 20,
        paddingRight: 40,
    },
    navigator: {
        flex: 1,
        backgroundColor: '#000000',
    },
});
