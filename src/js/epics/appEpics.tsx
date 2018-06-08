import {ActionsObservable} from 'redux-observable';
import {Observable} from 'rxjs';
import { LOADER_ACTION, ALERT_ACTION, DEMO_ACTIONS } from '../constants/actions';

export const addLoader = (action$: ActionsObservable<any>) =>
    action$.ofType(DEMO_ACTIONS.DEMO_LOADER)
        .flatMap(action =>
            Observable.concat(
                Observable.of({
                    type: LOADER_ACTION.ADD_LOADER_ITEM,
                    payload: DEMO_ACTIONS.DEMO_LOADER
                }),
                Observable.of({
                    type: LOADER_ACTION.REMOVE_LOADER_ITEM,
                    payload: DEMO_ACTIONS.DEMO_LOADER
                }).delay(4000)
            )
        );

export const addAlert = (action$: ActionsObservable<any>) =>
    action$.ofType(DEMO_ACTIONS.DEMO_ALERTS)
        .flatMap((action) => {
                const date = new Date();
                return Observable.concat(
                    Observable.of({
                        type: ALERT_ACTION.ADD_ALERT_ITEM_ARRAY,
                        payload: [
                            `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} - ${date.getMilliseconds()}`
                        ]
                    }),
                    Observable.of({
                        type: ALERT_ACTION.REMOVE_ALERT_ITEM_ARRAY,
                        payload: [
                            `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} - ${date.getMilliseconds()}`
                        ]
                    }).delay(4000)
                );
            }
        );


