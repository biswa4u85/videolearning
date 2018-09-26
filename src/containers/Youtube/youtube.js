import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions, } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, ScrollableTab } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import AutoHeightImage from 'react-native-auto-height-image';
import { Color } from '@common'

export default class YouTube extends React.Component {

    constructor(props){
        super(props);
    }  

    render() {
        const {navigate} = this.props
        return (
            <ScrollView style={styles.container}>
                <View style={styles.bannerCont}>
                    <ScrollView horizontal={true} pagingEnabled={true}>
                        <TouchableOpacity style={styles.bannerSliderBox} onPress={() => navigate('VideoDetails')}>
                            <AutoHeightImage width={Dimensions.get('window').width} source={require('../images/img4.jpg')} />
                            <View style={styles.bannerQuote}>
                                <Text style={styles.bannerTxt}>Hunted House</Text>
                            </View>
                        </TouchableOpacity> 
                        <TouchableOpacity style={styles.bannerSliderBox} onPress={() => navigate('VideoDetails')}>
                            <AutoHeightImage width={Dimensions.get('window').width} source={require('../images/img4.jpg')} />
                            <View style={styles.bannerQuote}>
                                <Text style={styles.bannerTxt}>Cheap Thrills - Sia (cover) Megan Nicole</Text>
                            </View>
                        </TouchableOpacity>                        
                    </ScrollView>
                </View>

                <View styles={styles.thumbSlide}>
                    <View style={styles.sliderHeader}>
                        <Text style={styles.subTitle}>Animations</Text>                        
                    </View>
                    <ScrollView style={styles.thumbSlider} horizontal={true}>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>                        
                    </ScrollView>
                </View>

                <View styles={styles.thumbSlide}>
                    <View style={styles.sliderHeader}>
                        <Text style={styles.subTitle}>Science</Text>                        
                    </View>
                    <ScrollView style={styles.thumbSlider} horizontal={true}>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>                        
                    </ScrollView>
                </View>

                <View styles={styles.thumbSlide}>
                    <View style={styles.sliderHeader}>
                        <Text style={styles.subTitle}>Rhymes</Text>
                        <TouchableOpacity>
                            <Text style={styles.moreTxt}>VIEW ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.thumbSlider} horizontal={true}>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>                       
                    </ScrollView>
                </View>

                <View styles={styles.thumbSlide}>
                    <View style={styles.sliderHeader}>
                        <Text style={styles.subTitle}>Kid Stories</Text>                        
                    </View>
                    <ScrollView style={styles.thumbSlider} horizontal={true}>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>                        
                    </ScrollView>
                </View>

                <View styles={styles.thumbSlide}>
                    <View style={styles.sliderHeader}>
                        <Text style={styles.subTitle}>3D Animations</Text>                        
                    </View>
                    <ScrollView style={styles.thumbSlider} horizontal={true}>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>                        
                    </ScrollView>
                </View>

                <View styles={styles.thumbSlide}>
                    <View style={styles.sliderHeader}>
                        <Text style={styles.subTitle}>Misc.</Text>                        
                    </View>
                    <ScrollView style={styles.thumbSlider} horizontal={true}>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
                            <View><Image style={styles.slideImg} source={require('../images/img2.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox} onPress={() => navigate('VideoDetails')}>
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
        width:'100%',
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
        backgroundColor:Color.white,
        marginRight: 10,
        borderRadius: 4,
        elevation: 1,
        width: 130,
        marginBottom:1,        
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
});
