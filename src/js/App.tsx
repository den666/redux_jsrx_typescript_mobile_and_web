import * as React from 'react';
import {IS_MOBILE} from './constants/environment';
import WebApp from './WebApp';

export default class App extends React.Component {
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <WebApp/>
        );
    }
}