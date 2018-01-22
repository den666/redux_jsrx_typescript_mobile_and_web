import * as React from 'react';
import AppContainer from './containers/AppContainer';

export default class WebApp extends React.Component<{}> {
    constructor(props:{}) {
        super(props);
    }
    render() {
        return (
            <AppContainer/>
        );
    }
}