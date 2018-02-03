import * as React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import {COLORS, FONT, DISPLAY, DIMENSIONS} from '../../../constants/AppStyles';
import {AlertsContainerProps} from '../../../containers/layoutContainers/AlertsContainer';


export class AlertsComponent extends React.Component<AlertsContainerProps, any> {
    constructor(props: AlertsContainerProps) {
        super(props);
    }
    render() {
        const {alertsList} = this.props;
        return (
                alertsList.length > 0 &&
                    <View style={styles.alerts}>
                        {alertsList.map((item, key) => {
                            return <View key={key} style={styles.alertItem}>
                                        <Text style={styles.alertItemText}>{item.toUpperCase()}</Text>
                                    </View>;
                        })}
                    </View>
        );
    }
}

const styles: any = StyleSheet.create({
    alerts: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: DIMENSIONS.WIDTH,
        zIndex: 89
    },
    alertItem: {
        marginBottom: 2,
        width: DIMENSIONS.WIDTH,
        padding: DISPLAY.MARGIN,
        backgroundColor: COLORS.WARNING_COLOR
    },
    alertItemText: {
        textAlign: 'center',
        color: COLORS.WHITE_COLOR,
        fontSize: FONT.DEFAULT_SIZE,
    }
});