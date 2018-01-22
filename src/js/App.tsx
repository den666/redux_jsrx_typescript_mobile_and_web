import * as React from 'react';
import {Provider} from 'react-redux';
import WebApp from './WebApp';
import configureStore from './initialState/configureStore';
import { PersistGate } from 'redux-persist/lib/integration/react';

const { store, persistor } = configureStore();

const onBeforeLift = () => {
    // take some action before the gate lifts
};

export default class App extends React.Component<{}> {
    constructor(props:{}) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={'loading'}
                    onBeforeLift={onBeforeLift}
                    persistor={persistor}>
                    <WebApp/>
                </PersistGate>
            </Provider>
        );
    }
}