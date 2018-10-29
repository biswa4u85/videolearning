import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Share } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, ScrollableTab } from 'native-base';
import ModalFilterPicker from 'react-native-modal-filter-picker'
import { ScrollView } from 'react-native-gesture-handler';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import SearchBar from 'react-native-searchbar';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Color } from '@common';
import Home from "../Home/home";
import YouTube from "../Youtube/youtube";
import UploadVideo from "../UploadVideo/uploadvideo";
import Articles from "../Articles/articles";
import Quiz from "../Quiz/quiz";
import Cources from "../Cources/cources";
import Vinay from "../Vinay/vinay";
import MessagePopup from '../MessagePopup/'
import FinishPopup from '../FinishPopup/'
import QuizPopup from '../QuizPopup/'
import { TopMenu } from '../../navigation/IconNav'
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
} from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

const items = [
    1337,
    'janeway',
    {
        lots: 'of',
        different: {
            types: 0,
            data: false,
            that: {
                can: {
                    be: {
                        quite: {
                            complex: {
                                hidden: ['gold!'],
                            },
                        },
                    },
                },
            },
        },
    },
    [4, 2, 'tree'],
];

class Index extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    constructor() {
        super();
        this.state = {
            options: [],
            menuVisible: false,
            picked: null,

            items,
            results: [],
            moreMenu: false,
        };
        this._handleResults = this._handleResults.bind(this);
    }

    _handleResults(results) {
        this.setState({ results });
    }

    // onShow = () => {
    //     this.setState({ visible: true });
    // }

    // onSelect = (picked) => {
    //     this.setState({
    //         picked: picked,
    //         visible: false
    //     })
    // }

    // onCancel = () => {
    //     this.setState({
    //         visible: false
    //     });
    // }

    // _menu = null;

    // setMenuRef = ref => {
    //     this._menu = ref;
    // };

    // hideMenu() {
    //     this._menu.hide();
    // };

    // showMenu = () => {
    //     this._menu.show();
    // };

    openShare() {
        Share.share({
            message: 'BAM: we\'re helping your business with awesome React Native apps',
            url: 'http://bam.tech',
            title: 'Wow, did you see that?'
        }, {
                // Android only:
                dialogTitle: 'Share BAM goodness',
                // iOS only:
                excludedActivityTypes: [
                    'com.apple.UIKit.activity.PostToTwitter'
                ]
            })
    }

    state = {
        dialogShow: false,
    };

    moreMenuOpen() {
        this.moreMenu.show();
    }
    moreMenuClose() {
        this.moreMenu.hide();
    }

    showScaleAnimationDialog = () => {
        this.scaleAnimationDialog.show();
    }

    showSlideAnimationDialog = () => {
        this.slideAnimationDialog.show();
    }

    showFadeAnimationDialog = () => {
        this.fadeAnimationDialog.show();
    }

    showScaleAnimationDialogQuiz = () => {
        this.scaleAnimationDialogQuiz.show();
    }

    showSlideAnimationDialogQuiz = () => {
        this.slideAnimationDialogQuiz.show();
    }

    showFadeAnimationDialogQuiz = () => {
        this.fadeAnimationDialogQuiz.show();
    }

    menuToggle() {
        const { menuVisible } = this.state
        this.setState({ menuVisible: !menuVisible })
    }

    render() {
        const { navigate } = this.props.navigation
        const { menuVisible } = this.state
        return (
            <Container>
                <PopupDialog
                    dialogStyle={{ padding: 10, backgroundColor: 'rgba(52, 52, 52, 0)' }}
                    ref={(popupDialog) => { this.scaleAnimationDialog = popupDialog; }}
                    dialogAnimation={scaleAnimation}>
                    <MessagePopup onPress={() => { this.scaleAnimationDialog.dismiss(); }} />
                </PopupDialog>
                {/* Quiz */}
                <PopupDialog
                    dialogStyle={{ padding: 10, backgroundColor: 'rgba(52, 52, 52, 0)' }}
                    height={600}
                    ref={(popupDialog) => { this.scaleAnimationDialogQuiz = popupDialog; }}
                    dialogAnimation={scaleAnimation}>
                    <QuizPopup navigate={navigate} onPress={() => { this.scaleAnimationDialogQuiz.dismiss(); }} />
                </PopupDialog>
                <View style={menuVisible ? styles.topRightMenuOpen : styles.topRightMenu} >
                        {/* <Icon name='md-log-in' style={styles.indicateArrow} /> */}
                        <TouchableOpacity style={styles.menuList} onPress={() => { this.menuToggle(); navigate('Login') }}><Icon name='md-log-in' style={styles.rightMenuIcon} /><Text style={styles.rightMenuTxt}>Logi In</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menuList} onPress={() => { this.menuToggle(); navigate('WatchLater') }}><Icon name='watch' style={styles.rightMenuIcon} /><Text style={styles.rightMenuTxt}>Watch Later</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menuList} onPress={() => { this.menuToggle(); navigate('Download') }}><Icon name='download' style={styles.rightMenuIcon} /><Text style={styles.rightMenuTxt}>Download List</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menuList} onPress={() => { this.menuToggle(); navigate('AboutUs') }}><Icon name='people' style={styles.rightMenuIcon} /><Text style={styles.rightMenuTxt}>About Us</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menuList} onPress={() => { this.menuToggle(); this.openShare() }}><Icon name='share' style={styles.rightMenuIcon} /><Text style={styles.rightMenuTxt}>Share</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menuList} onPress={() => { this.menuToggle(); this.showScaleAnimationDialog() }}><Icon name='send' style={styles.rightMenuIcon} /><Text style={styles.rightMenuTxt}>Send Feedback</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menuList} onPress={() => { this.menuToggle(); navigate('Notifications') }}><Icon name='notifications' style={styles.rightMenuIcon} /><Text style={styles.rightMenuTxt}>Notification</Text></TouchableOpacity>
                </View>
                {/*POPUP MENU Start*/}

                {/*POPUP MENU End*/}

                <View style={styles.headerBg}>
                    <View>
                        {TopMenu()}
                    </View>
                    <View>
                        <Title style={styles.title}>Mobile Learning App</Title>
                    </View>

                    {/*Search Start*/}
                    {/* <View>
                        {
                            this.state.results.map((result, i) => {
                                return (
                                    <Text key={i}>
                                        {typeof result === 'object' && !(result instanceof Array) ? 'gold object!' : result.toString()}
                                    </Text>
                                );
                            })
                        }
                    </View> */}
                    {/*Search End*/}

                    <Button transparent onPress={() => this.searchBar.show()}>
                        <Icon style={styles.searchIcon} name='search' />
                    </Button>
                    <Button style={styles.moreMenuIcon} transparent onPress={() => this.menuToggle()}
                       >
                        <EntypoIcon style={styles.headerIcon} name='dots-three-vertical' />
                    </Button>

                    {/* <Menu
                                ref={this.setMenuRef}
                                button={<Button transparent onPress={() => this.showMenu()}>
                                    <EntypoIcon style={styles.headerIcon} name='dots-three-vertical' />
                                </Button>}
                                style={{ width: 200, }}>
                                <MenuItem onPress={() => { this.hideMenu(); navigate('Login') }}><Icon name='md-log-in' style={styles.rightMenuIcon} /> Logi In</MenuItem>
                                <MenuItem onPress={() => { this.hideMenu(); navigate('WatchLater') }}><Icon name='watch' style={styles.rightMenuIcon} /> Watch Later</MenuItem>
                                <MenuItem onPress={() => { this.hideMenu(); navigate('Download') }}><Icon name='download' style={styles.rightMenuIcon} /> Download List</MenuItem>
                                <MenuItem onPress={() => { this.hideMenu(); navigate('AboutUs') }}><Icon name='people' style={styles.rightMenuIcon} /> About Us</MenuItem>
                                <MenuItem onPress={() => { this.hideMenu(); this.openShare() }}><Icon name='share' style={styles.rightMenuIcon} /> Share</MenuItem>
                                <MenuItem onPress={() => { this.hideMenu(); this.showScaleAnimationDialog() }}><Icon name='send' style={styles.rightMenuIcon} /> Send Feedback</MenuItem>
                                <MenuItem onPress={() => { this.hideMenu(); navigate('Notifications') }}><Icon name='notifications' style={styles.rightMenuIcon} /> Notification</MenuItem>
                            </Menu> */}                  

                </View>
                <SearchBar
                    ref={(ref) => this.searchBar = ref}
                    data={items}
                    handleResults={this._handleResults}
                    hideOnLoad
                />

                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Home">
                        <Home navigate={navigate} />
                    </Tab>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Youtube Videos">
                        <YouTube navigate={navigate} />
                    </Tab>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Upload Videos">
                        <UploadVideo navigate={navigate} />
                    </Tab>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Articles">
                        <Articles navigate={navigate} />
                    </Tab>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Quiz">
                        <Quiz showScaleAnimationDialogQuiz={this.showScaleAnimationDialogQuiz} navigate={navigate} />
                    </Tab>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Courses">
                        <Cources navigate={navigate} />
                    </Tab>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Vinay">
                        <Vinay navigate={navigate} />
                    </Tab>
                    <Tab textStyle={{ color: '#fff' }} tabStyle={{ backgroundColor: Color.primary }} activeTabStyle={{ backgroundColor: Color.primary }} heading="Thomson D">
                        <Text>Thomson D</Text>
                    </Tab>
                </Tabs>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    headerBg: {
        backgroundColor: Color.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 35,
        flexDirection: 'row',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    label: {

    },
    buttonContainer: {
        backgroundColor: '#008E3C',
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    selectText: {
        color: '#fff'
    },
    tabBg: {
        backgroundColor: Color.primary,
    },
    rightMenuIcon: {
        fontSize: 18,
        width: 50,
    },
    searchIcon: {
        color: Color.white,
        marginRight: 25,
        fontSize: 22,
    },
    moreMenuIcon: {
        // position:'absolute',
        right: 15,
        top: 0,
    },
    headerIcon: {
        color: Color.white,
        fontSize: 18,
    },
    topRightMenu: {
        backgroundColor: Color.white,
        borderRadius: 3,
        paddingHorizontal: 10,
        width:200, 
        height:0,       
        position:'absolute',
        right:0,
        top:70,
        zIndex:999,        
    },
    topRightMenuOpen: {
        backgroundColor: Color.white,
        borderRadius: 3,
        paddingHorizontal: 10,
        width:200,       
        position:'absolute',
        right:0,
        top:80,
        zIndex:999,    
        overflow: 'visible',                
    },
    menuList: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    rightMenuIcon: {
        fontSize: 18,
        color: Color.black,
        marginRight: 10,
    },
    rightMenuTxt: {
        fontSize: 14,
        color: Color.black,
    },
    // indicateArrow:{
    //     position:'absolute',
    //     right:20,
    //     top:-10,
    //     zIndex:999999,
    // },
});

export default Index
