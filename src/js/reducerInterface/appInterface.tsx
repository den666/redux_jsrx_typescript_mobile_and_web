import alertsInterface from './alertsInterface';
import loaderInterface from './loaderInterface';

export interface AppInterface {
    routerReducer: any
    loaderReducer: loaderInterface,
    alertsReducer: alertsInterface,
    _persist?:{
        [name:string]: any
    }
}