import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation';

import Index from '../containers/Index/index'
import Login from '../containers/Login/login'
import ForgotPass from '../containers/ForgotPass/forgotpass'
import Signup from '../containers/Signup/signup'
import ArticleDetails from '../containers/ArticleDetails/articledetails'
import Question from '../containers/Question/question'
import ResultSolution from '../containers/ResultSolution/resultsolution'
import WatchLater from '../containers/Watchlater/watchlater'
import VideoDetails from '../containers/VideoDetails/videodetails'
import Download from '../containers/Download/'
import AboutUs from '../containers/AboutUs/'
import Notifications from '../containers/Notifications/'
import ViewAll from '../containers/ViewAll'


const MainNavigator = StackNavigator({

    Index: { screen: Index },
    Login: { screen: Login },
    ForgotPass: { screen: ForgotPass },
    Signup: { screen: Signup },
    VideoDetails: { screen: VideoDetails },
    ArticleDetails: { screen: ArticleDetails },
    Question: { screen: Question },
    ResultSolution: { screen: ResultSolution },
    WatchLater: { screen: WatchLater },
    Download: { screen: Download },
    AboutUs: { screen: AboutUs },
    Notifications: { screen: Notifications },
    ViewAll: { screen: ViewAll },

}, {
    })

export default MainNavigator;