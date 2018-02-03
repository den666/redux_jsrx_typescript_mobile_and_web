import {AnyAction} from 'redux';
import loaderInterface, { loaderState } from '../reducerInterface/loaderInterface';
import {ADD_LOADER_ITEM, CLEAR_LOADER, REMOVE_LOADER_ITEM} from '../actions/loaderActions';

const loaderReducer = (state:loaderInterface = loaderState, action: AnyAction): loaderInterface => {
    switch (action.type) {
        case ADD_LOADER_ITEM:
            const newState = [...state.loaderList];
            newState.push(action.payload);
            return {
                ...state,
                loaderList: newState
            };
        case REMOVE_LOADER_ITEM:
            const newStateWithOutItem = [...state.loaderList].filter(item => item !== action.payload);
            return {
                ...state,
                loaderList: newStateWithOutItem
            };
        case CLEAR_LOADER:
            return {
                ...state,
                loaderList: []
            };
        default:
            return {
                ...state
            };
    }
};

export default loaderReducer;