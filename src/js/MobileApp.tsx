import * as React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { ConnectedRouter } from 'react-router-redux';
import { StyleSheet, View } from 'react-native';
import {ROUTES} from './constants/AppRoutes';
/*routes*/
import AppContainer from './containers/AppContainer';

import {history} from './initialState/configureStore';

export default class MobileApp extends React.Component {
    constructor(props:{}) {
        super(props);
    }
    render() {
        return (
            <NativeRouter>
                <ConnectedRouter history={history}>
                    <View style={styles.container}>
                        <Switch>
                            <Route exact path={ROUTES.HOME} component={AppContainer}/>
                        </Switch>
                    </View>
                </ConnectedRouter>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
