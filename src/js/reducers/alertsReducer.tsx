import {AnyAction} from 'redux';
import { ALERT_ACTION } from '../constants/actions';

export interface alertsReducerInterface {
    alertsList: string[]
}

export const alertsState:alertsReducerInterface = {
    alertsList: []
};

const errorMessage = (error: any) => {
    return error.response.notifications.linkedMessages.length > 0
        ? error.response.notifications.linkedMessages
        : error.response.notifications.errorMessages;
};

const alertsReducer = (state:alertsReducerInterface = alertsState, action: AnyAction): alertsReducerInterface => {
    switch (action.type) {
        case ALERT_ACTION.ADD_ALERT_ITEM:
            const newState = [...state.alertsList];
            newState.push(action.payload);
            return {
                ...state,
                alertsList: newState
            };

        case ALERT_ACTION.ADD_ALERT_ITEM_ARRAY:

            const newStateArray = [...state.alertsList];

            const mergeArray = newStateArray.concat(errorMessage(action.payload));
            return {
                ...state,
                alertsList: mergeArray
            };
        case ALERT_ACTION.REMOVE_ALERT_ITEM:
            const newStateWithOutItem = [...state.alertsList].filter(item => item !== action.payload);
            return {
                ...state,
                alertsList: newStateWithOutItem
            };
        case ALERT_ACTION.REMOVE_ALERT_ITEM_ARRAY:
            const newStateWithOutItemArray = [...state.alertsList].filter((item) => {
                let ifExist = false;
                errorMessage(action.payload).map((itemList:string) => {
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
        case ALERT_ACTION.CLEAR_ALERTS:
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