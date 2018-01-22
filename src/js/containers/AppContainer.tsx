import {connect, Dispatch} from 'react-redux';
import {AppInterface} from '../initialState/appInterface';

interface stateProps {
}

interface dispatchProps {
}

const mapStateToProps = (state:AppInterface): stateProps => {
    return {
    };
};


const mapDispatchToProps = (dispatch:Dispatch<any>): dispatchProps => {
    return {

    };
};


const mergeProps = (stateProps: stateProps, dispatchProps: dispatchProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
    };
};

const isWeb = !!(process && process.env && process.env.TYPE_APP && process.env.TYPE_APP === 'web');
const {AppView} =   isWeb
                    ? require('../components/webComponents/AppView')
                    : require('../components/mobileComponents/AppView');

console.log('isWeb', isWeb);
console.log('AppView', AppView);

export default connect<stateProps, dispatchProps, any>(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AppView);

export type AppContainerProps = stateProps & dispatchProps;
