import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions, } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, ScrollableTab, Accordion, Content } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import AutoHeightImage from 'react-native-auto-height-image';
// import YouTube from 'react-native-youtube'
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';
import { Color,Styles } from '@common'



export default class VideoDetails extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Watch Later',
        // headerLeft: null,
        headerRight: null,
        headerTintColor: Color.white,
        headerStyle: { backgroundColor: 'transparent' },
        headerTitleStyle: Styles.headerTitle,
    })
    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={styles.bannerCont}>
                    <View style={styles.bannerSliderBox}>
                    <VideoPlayer
  videoProps={{
    shouldPlay: true,
    resizeMode: Video.RESIZE_MODE_CONTAIN,
    source: {
      uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    },
  }}
  isPortrait={true}
  playFromPositionMillis={0}
/>
                        {/* <YouTube
  videoId="KVZ-P-ZI6W4"   // The YouTube video ID
  play={true}             // control playback of video with true/false
  fullscreen={true}       // control whether the video should play in fullscreen or inline
  loop={true}             // control whether the video should loop when ended

  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}

  style={{ alignSelf: 'stretch', height: 300 }}
/> */}
                        {/* <AutoHeightImage width={Dimensions.get('window').width} source={require('../images/img1.jpg')} /> */}
                    </View>
                    <View style={styles.videoDetails}>
                        <Content style={{ borderWidth: 0 }}>
                            <Accordion noBorder dataArray={[{ title: "Sleep Well | Great Plaus", content: "Sleep Well | Great Plaus" }]} headerStyle={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", borderColor: "#fff" }} contentStyle={{ backgroundColor: "#F1F1F1" }} />
                        </Content>
                        <View style={styles.videoSocialArea}>
                            <View style={styles.leftArea}>
                                <TouchableOpacity>
                                    <Icon name='thumbs-up' style={styles.videoIcon} />
                                </TouchableOpacity>
                                <Text style={styles.likeTxt}>0</Text>
                                <TouchableOpacity>
                                    <Icon name='thumbs-down' style={styles.videoIcon} />
                                </TouchableOpacity>
                                <Text style={styles.likeTxt}>0</Text>
                            </View>
                            <View style={styles.RightArea}>
                                <TouchableOpacity>
                                    <Icon name='time' style={styles.videoIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name='download' style={styles.videoIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View styles={styles.thumbSlide}>
                    <View style={styles.sliderHeader}>
                        <Text style={styles.subTitle}>You may also like</Text>
                    </View>
                    <ScrollView style={styles.thumbSlider} horizontal={true}>
                        <TouchableOpacity style={styles.thumbSlideBox}>
                            <View><Image style={styles.slideImg} source={require('../images/img1.jpg')} /></View>
                            <View style={styles.slideTxtArea}>
                                <Text style={styles.slideTitle}>Lorem ipsum</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.thumbSlideBox}>
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
    },
    bannerCont: {

    },
    bannerSliderBox: {
        width: Dimensions.get('window').width,
    },
    videoDetails: {
        backgroundColor: Color.greyBg,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    videoSocialArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    leftArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
    },
    RightArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '20%',
        width: '40%',
    },
    likeTxt: {
        fontSize: 18,
        color: Color.videoIcon,
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
        paddingVertical: 3,
        backgroundColor: Color.primary,
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 20,
        color: Color.white,
        paddingVertical: 5,
    },
    thumbSlider: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    thumbSlideBox: {
        backgroundColor: Color.white,
        marginRight: 10,
        borderRadius: 3,
        elevation: 1,
        width: 130,
        marginBottom: 1,
    },
    slideImg: {
        width: 130,
        height: 130,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
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
