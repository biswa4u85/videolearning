import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Share } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs, ScrollableTab } from 'native-base';
import ModalFilterPicker from 'react-native-modal-filter-picker'
import { ScrollView } from 'react-native-gesture-handler';
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
            visible: false,
            picked: null,

            items,
            results: []
        };
        this._handleResults = this._handleResults.bind(this);
    }

    _handleResults(results) {
        this.setState({ results });
    }

    onShow = () => {
        this.setState({ visible: true });
    }

    onSelect = (picked) => {
        this.setState({
            picked: picked,
            visible: false
        })
    }

    onCancel = () => {
        this.setState({
            visible: false
        });
    }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu() {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

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
        const { navigate } = this.props.navigation
        return (

            <Container>
                <PopupDialog
                    dialogStyle={{ padding: 10, backgroundColor: 'rgba(52, 52, 52, 0)' }}
                    ref={(popupDialog) => {
                        this.scaleAnimationDialog = popupDialog;
                    }}
                    dialogAnimation={scaleAnimation}>

                    <MessagePopup onPress={() => { this.scaleAnimationDialog.dismiss(); }} />

                </PopupDialog>
                {/*POPUP MENU Start*/}
                
                {/*POPUP MENU End*/}

                <Header style={styles.headerBg}>
                    <Left>
                        {/* {TopMenu()} */}
                        <Button transparent  >
    <Icon name='menu' />
</Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>Mobile Learning App</Title>
                    </Body>
                    <Right>
                        {/*Search Start*/}
                        <View>
                            {
                                this.state.results.map((result, i) => {
                                    return (
                                        <Text key={i}>
                                            {typeof result === 'object' && !(result instanceof Array) ? 'gold object!' : result.toString()}
                                        </Text>
                                    );
                                })
                            }
                        </View>
                        {/*Search End*/}
                        <Button transparent onPress={() => this.searchBar.show()}>
                            <Icon name='search' />
                        </Button>
                        <View style={{ position: 'absolute', right: 0, top: 0, }}>
                    <Menu 
                    ref={this.setMenuRef} 
                    button={ <Button transparent onPress={() => this.showMenu()}>
                    <Icon name='md-more' />
                </Button>}
                    style={{ width: 200, }}>
                        <MenuItem onPress={() => { this.hideMenu(); navigate('Login') }}><Icon name='md-log-in' style={styles.rightMenuIcon} /> <Text style={{ paddingLeft: 20 }}>Logi In</Text></MenuItem>
                        <MenuItem onPress={() => { this.hideMenu(); navigate('WatchLater') }}><Icon name='watch' style={styles.rightMenuIcon} /> <Text>Watch Later</Text></MenuItem>
                        <MenuItem onPress={() => { this.hideMenu(); navigate('Download') }}><Icon name='download' style={styles.rightMenuIcon} /> <Text>Download List</Text></MenuItem>
                        <MenuItem onPress={() => { this.hideMenu(); navigate('AboutUs') }}><Icon name='people' style={styles.rightMenuIcon} /> <Text>About Us</Text></MenuItem>
                        <MenuItem onPress={() => { this.hideMenu(); this.openShare() }}><Icon name='share' style={styles.rightMenuIcon} /> <Text>Share</Text></MenuItem>
                        <MenuItem onPress={() => { this.hideMenu(); this.showScaleAnimationDialog() }}><Icon name='send' style={styles.rightMenuIcon} /> <Text>Send Feedback</Text></MenuItem>
                        <MenuItem onPress={() => { this.hideMenu(); navigate('Notifications') }}><Icon name='notifications' style={styles.rightMenuIcon} /><Text>Notification</Text></MenuItem>
                    </Menu>
                </View>

                        {/* */}
                    </Right>
                    <SearchBar
                        style={{ top: 60, marginTop: 60, }}
                        ref={(ref) => this.searchBar = ref}
                        data={items}
                        handleResults={this._handleResults}
                        hideOnLoad
                    />
                </Header>

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
                        <Quiz navigate={navigate} />
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
        alignItems: 'center',
        paddingTop: 47,
        paddingBottom: 25,
        elevation: 4,
    },
    topBar: {
        flexDirection: 'row',
        paddingBottom: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 21,
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
});

export default Index
