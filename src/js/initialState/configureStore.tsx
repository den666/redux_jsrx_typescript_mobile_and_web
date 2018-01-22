import { createStore, applyMiddleware } from 'redux';
import {Store} from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import {createEpicMiddleware} from 'redux-observable';
import rootEpic from '../epics/rootEpic';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {AppInterface} from './appInterface';

const epicMiddleware = createEpicMiddleware(rootEpic);

const initialState = !!(JSON.parse(localStorage.getItem('persist:root')));

const config = {
    storage,
    key: 'root',
    stateReconciler: initialState ? hardSet : autoMergeLevel2
};

const reducer = persistReducer(config, rootReducer);


export default () => {
    const store:Store<AppInterface> = createStore(reducer, applyMiddleware(...[epicMiddleware]));
    const persistor:AppInterface = persistStore(store);
    return { store, persistor };
};