import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AppContainerProps } from '../../../containers/viewContainers/AppContainer';
import {DISPLAY} from '../../../constants/AppStyles';

export class AppView extends React.Component<AppContainerProps> {
    render() {
        const { showAlert, showLoader } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={() => showLoader()}>
                    <Text>VIEW LOADER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => showAlert()}>
                    <Text>VIEW ALERT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        marginBottom: DISPLAY.MARGIN
    }
});
