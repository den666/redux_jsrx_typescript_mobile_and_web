import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MobileApp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Chan marica</Text>
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