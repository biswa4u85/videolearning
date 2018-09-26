import { Platform } from 'react-native'
export default {
    showStatusBar: false,
    apiKey: (Platform.OS === 'ios') ? 'AIzaSyBKk2T1X4YHp6vqk1ptlsL4CB70KFWbJ4M' : 'AIzaSyB5ZDLLeuH5f3wHoADJk2i5B4KlRwHEDYE',
    menu: {
        isMultiChild: true,
        listMenuUnlogged: [{
            text: 'Login',
            icon: 'folder',
            routeName: 'LoginScreen',
            params: {
                isLogout: false
            },
        }],
        // user logged in
        listMenuLogged: [{
            text: 'Logout',
            icon: 'folder',
            routeName: 'Custompage',
            params: {
                isLogout: true
            },
        }],
        // Default List
        listMenu: [
            {
                text: 'Edit Profile',
                icon: 'folder',
                routeName: 'Signup',
            },
            {
                text: 'Add Payment',
                icon: 'folder',
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