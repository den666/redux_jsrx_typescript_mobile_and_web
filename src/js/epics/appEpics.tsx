import {ActionsObservable} from 'redux-observable';
import {Observable} from 'rxjs';
import { DEMO_ALERTS, DEMO_LOADER } from '../actions/appActions';
import { ADD_LOADER_ITEM, REMOVE_LOADER_ITEM, LOADER_ITEMS } from '../actions/loaderActions';
import { ADD_ALERT_ITEM_ARRAY, REMOVE_ALERT_ITEM_ARRAY } from '../actions/alertsActions';

export const addLoader = (action$: ActionsObservable<any>) =>
    action$.ofType(DEMO_LOADER)
        .flatMap(action =>
            Observable.concat(
                Observable.of({
                    type: ADD_LOADER_ITEM,
                    payload: LOADER_ITEMS.DEMO
                }),
                Observable.of({
                    type: REMOVE_LOADER_ITEM,
                    payload: LOADER_ITEMS.DEMO
                }).delay(4000)
            )
        );

export const addAlert = (action$: ActionsObservable<any>) =>
    action$.ofType(DEMO_ALERTS)
        .flatMap((action) => {
            const date = new Date();
            return Observable.concat(
                Observable.of({
                    type: ADD_ALERT_ITEM_ARRAY,
                    payload: [
                        `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} - ${date.getMilliseconds()}`
                    ]
                }),
                Observable.of({
                    type: REMOVE_ALERT_ITEM_ARRAY,
                    payload: [
                        `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} - ${date.getMilliseconds()}`
                    ]
                }).delay(4000)
            );
        }
    );


