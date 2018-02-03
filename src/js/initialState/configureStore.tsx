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
import { routerMiddleware } from 'react-router-redux';
import createMemoryHistory from 'history/createMemoryHistory';

export const history = createMemoryHistory();
const epicMiddleware = createEpicMiddleware(rootEpic);
const middleware = routerMiddleware(history);


const config = {
    storage,
    key: 'root',
    stateReconciler: autoMergeLevel2,
};

const reducer = persistReducer(config, rootReducer);


export default () => {
    const store:Store<AppInterface> = createStore(
        reducer,
        applyMiddleware(...[epicMiddleware, middleware])
    );
    const persistor:AppInterface = persistStore(store);
    return { store, persistor };
};
