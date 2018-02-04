import {AnyAction} from 'redux';
import alertsInterface, { alertsDefaultState } from '../reducerInterface/alertsInterface';
import {
    ADD_ALERT_ITEM,
    ADD_ALERT_ITEM_ARRAY,
    REMOVE_ALERT_ITEM_ARRAY,
    CLEAR_ALERTS,
    REMOVE_ALERT_ITEM
} from '../actions/alertsActions';

const alertsReducer = (state:alertsInterface = alertsDefaultState, action: AnyAction): alertsInterface => {
    switch (action.type) {
        case ADD_ALERT_ITEM:
            const newState = [...state.alertsList];
            newState.push(action.payload);
            return {
                ...state,
                alertsList: newState
            };

        case ADD_ALERT_ITEM_ARRAY:
            const newStateArray = [...state.alertsList];
            const mergeArray = newStateArray.concat(action.payload);
            return {
                ...state,
                alertsList: mergeArray
            };
        case REMOVE_ALERT_ITEM:
            const newStateWithOutItem = [...state.alertsList].filter(item => item !== action.payload);
            return {
                ...state,
                alertsList: newStateWithOutItem
            };
        case REMOVE_ALERT_ITEM_ARRAY:
            const newStateWithOutItemArray = [...state.alertsList].filter((item) => {
                let ifExist = false;
                action.payload.map((itemList:string) => {
                    if (item === itemList) {
                        ifExist = true;
                    }
                });
                if (!ifExist) {
                    return item;
                }
            });
            return {
                ...state,
                alertsList: newStateWithOutItemArray
            };
        case CLEAR_ALERTS:
            return {
                ...state,
                alertsList: []
            };
        default:
            return {
                ...state
            };
    }
};

export default alertsReducer;