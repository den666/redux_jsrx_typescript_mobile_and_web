import {ActionsObservable} from 'redux-observable';
import {Observable} from 'rxjs';
import {SET_NAME, CHANGE_NAME} from '../actions/appActions';

export const setName = (action$: ActionsObservable<any>) =>
    action$.ofType(CHANGE_NAME)
        .flatMap(action =>
            Observable.concat(
                Observable.of({
                    type: SET_NAME,
                    payload: {...action.payload}
                })
            )
        );