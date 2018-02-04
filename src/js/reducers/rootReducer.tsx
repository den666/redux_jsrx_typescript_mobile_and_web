import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import loaderReducer from './loaderReducer';
import alertsReducer from './alertsReducer';

export default combineReducers({
    routerReducer,
    loaderReducer,
    alertsReducer
});