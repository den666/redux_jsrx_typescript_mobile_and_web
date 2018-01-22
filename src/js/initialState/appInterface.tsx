import {appReducerInterface} from './appState';

export interface AppInterface {
    appReducer: appReducerInterface,
    _persist?:{
        [name:string]: any
    }
}
