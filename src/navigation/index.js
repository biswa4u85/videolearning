import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation';

import Index from '../components/Index/index'
import Login from '../components/Login/login'
import ForgotPass from '../components/ForgotPass/forgotpass'
import Signup from '../components/Signup/signup'
import ArticleDetails from '../components/ArticleDetails/articledetails'
import Question from '../components/Question/question'
import ResultSolution from '../components/ResultSolution/resultsolution'
import WatchLater from '../components/Watchlater/watchlater'
import VideoDetails from '../components/VideoDetails/videodetails'
import Download from '../components/Download/'
import AboutUs from '../components/AboutUs/'
import Notifications from '../components/Notifications/'


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

}, {
    })

export default MainNavigator;