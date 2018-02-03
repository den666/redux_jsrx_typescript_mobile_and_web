import * as React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {COLORS, FONT, DISPLAY, DIMENSIONS} from '../../../constants/AppStyles';
import {LoaderContainerProps} from '../../../containers/layoutContainers/LoaderContainer';


export class LoaderComponent extends React.Component<LoaderContainerProps, any> {
    constructor(props: LoaderContainerProps) {
        super(props);
    }
    render() {
        const {loaderList} = this.props;
        return (
                loaderList.length > 0 &&
                    <View style={styles.loader}>
                        <ActivityIndicator size="large" color="#ffffff" />
                    </View>
        );
    }
}

const styles: any = StyleSheet.create({
    loader: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: DIMENSIONS.WIDTH,
        height: DIMENSIONS.HEIGHT,
        backgroundColor: 'rgba(0, 0, 0, .4)',
        justifyContent: 'center',
        flex: 1,
        zIndex: 99
    }
});