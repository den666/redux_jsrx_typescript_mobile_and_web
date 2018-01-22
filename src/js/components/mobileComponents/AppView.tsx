import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IS_WEB} from '../../constants/environment';

export class AppView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Chan marica 2</Text>
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
});
