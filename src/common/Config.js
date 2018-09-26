import { Platform } from 'react-native'
export default {
    showStatusBar: false,
    apiKey: (Platform.OS === 'ios') ? 'AIzaSyBKk2T1X4YHp6vqk1ptlsL4CB70KFWbJ4M' : 'AIzaSyB5ZDLLeuH5f3wHoADJk2i5B4KlRwHEDYE',
    menu: {
        isMultiChild: true,
        listMenuUnlogged: [{
            text: 'Login',
            icon: 'login',
            routeName: 'LoginScreen',
            params: {
                isLogout: false
            },
        }],
        // user logged in
        listMenuLogged: [{
            text: 'Logout',
            icon: 'log-out',
            routeName: 'Custompage',
            params: {
                isLogout: true
            },
        }],
        // Default List
        listMenu: [
            {
                text: 'Edit Profile',
                icon: 'edit',
                routeName: 'Signup',
            },
            {
                text: 'Add Payment',
                icon: 'creative-commons',
                routeName: 'Payment',
            },
            {
                text: 'History',
                icon: 'folder',
                routeName: 'History',
            },
        ],
    },
}