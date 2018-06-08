import {AnyAction} from 'redux';
import {LOADER_ACTION} from '../constants/actions';

export interface loaderReducerInterface {
    loaderList: string[]
}

export const loaderState:loaderReducerInterface = {
    loaderList: []
};

const loaderReducer = (state:loaderReducerInterface = loaderState, action: AnyAction): loaderReducerInterface => {
    switch (action.type) {
        case LOADER_ACTION.ADD_LOADER_ITEM:
            const newState = [...state.loaderList];
            newState.push(action.payload);
            return {
                ...state,
                loaderList: newState
            };
        case LOADER_ACTION.REMOVE_LOADER_ITEM:
            const newStateWithOutItem = [...state.loaderList].filter(item => item !== action.payload);
            return {
                ...state,
                loaderList: newStateWithOutItem
            };
        case LOADER_ACTION.CLEAR_LOADER:
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