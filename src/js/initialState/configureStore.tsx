import { createStore, applyMiddleware } from 'redux';
import {Store} from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import {createEpicMiddleware} from 'redux-observable';
import rootEpic from '../epics/rootEpic';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import {AppInterface} from './appInterface';

const epicMiddleware = createEpicMiddleware(rootEpic);

const config = {
    storage,
    key: 'root',
    stateReconciler: hardSet,
};

const reducer = persistReducer(config, rootReducer);


export default () => {
    const store:Store<AppInterface> = createStore(reducer, applyMiddleware(...[epicMiddleware]));
    const persistor:AppInterface = persistStore(store);
    return { store, persistor };
};