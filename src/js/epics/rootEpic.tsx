import {combineEpics} from 'redux-observable';
import { addLoader, addAlert } from './appEpics';

export default combineEpics(
    addLoader,
    addAlert
);