import * as React from 'react';
import MobileApp from './src/js/MobileApp';

import {Provider} from 'react-redux';
import configureStore from './src/js/reducerInterface/configureStore';
import { PersistGate } from 'redux-persist/lib/integration/react';

const { store, persistor } = configureStore();

const onBeforeLift = () => {
    // take some action before the gate lifts
};

export default class App extends React.Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    onBeforeLift={onBeforeLift}
                    persistor={persistor}>
                    <MobileApp/>
                </PersistGate>
            </Provider>
        );
    }
}