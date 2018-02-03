import {combineReducers} from 'redux';
import appReducer from './appReducer';
import {routerReducer} from 'react-router-redux';
import loaderReducer from './loaderReducer';
import alertsReducer from './alertsReducer';

export default combineReducers({
    appReducer,
    routerReducer,
    loaderReducer,
    alertsReducer
});