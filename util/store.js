import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import dexReducer from './reducers'

const persistConfig = {
    key: 'persist-key',
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    dexReducer: persistReducer(persistConfig,dexReducer)
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);