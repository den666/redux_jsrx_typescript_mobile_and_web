import {alertsReducerInterface} from '../reducers/alertsReducer';
import {loaderReducerInterface} from '../reducers/loaderReducer';

export interface AppInterface {
    routerReducer: any
    loaderReducer: loaderReducerInterface,
    alertsReducer: alertsReducerInterface,
    _persist?:{
        [name:string]: any
    }
}