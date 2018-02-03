import {AnyAction} from 'redux';
import appState, {appReducerInterface} from '../reducerInterface/appInterface';
import {SET_NAME} from '../actions/appActions';

const appReducer = (state:appReducerInterface = appState, action: AnyAction): appReducerInterface => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default appReducer;