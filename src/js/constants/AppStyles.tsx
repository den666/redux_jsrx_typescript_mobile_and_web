import {Dimensions, Platform, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const DIMENSIONS = {
    WIDTH: width,
    HEIGHT: height,
    TOP: (Platform.OS === 'ios') ? 20 : 0
};

export const FONT = {
    DEFAULT_SIZE: 15,
};

export const DISPLAY = {
    MARGIN: 15,
};

export const COLORS = {
    WHITE_COLOR: '#ffffff',
    WARNING_COLOR: '#FFA700',
    BLACK_COLOR: '#000000',
};

export const GLOBAL_STYLES = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        paddingTop: DIMENSIONS.TOP,
    }
});
