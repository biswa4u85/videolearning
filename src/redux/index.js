import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import { reducer as NetInfoReducer } from './NetInfoRedux';
import { reducer as ToastReducer } from './ToastRedux';
import { reducer as UserRedux } from './UserRedux';
import { reducer as PlaceRedux } from './PlaceRedux';
import { reducer as LiveRedux } from './LiveRedux';

const config = {
    key: 'root',
    storage,
    blacklist: [
        'netInfo',
        'toast',
        'nav',
    ]
}


export default persistCombineReducers(config, {
    netInfo: NetInfoReducer,
    toast: ToastReducer,
    user: UserRedux,
    placs: PlaceRedux,
    liveData: LiveRedux,
});