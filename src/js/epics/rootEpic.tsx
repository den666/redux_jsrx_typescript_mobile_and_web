import {combineEpics} from 'redux-observable';
import {setName} from './appEpics';

export default combineEpics(
    setName
);