import {connect, Dispatch} from 'react-redux';
import {AppInterface} from '../../reducerInterface/appInterface';
import {IS_WEB} from '../../constants/environment';
import { withRouter } from 'react-router-dom';

interface stateProps {
    loaderList: string[]
}

interface dispatchProps {
}

const mapStateToProps = (state:AppInterface): stateProps => {
    return {
        loaderList: state.loaderReducer.loaderList
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

const {LoaderComponent} =   IS_WEB
                    ? require('../../components/webComponents/layout/LoaderComponent')
                    : require('../../components/mobileComponents/layout/LoaderComponent');

export default withRouter(connect<stateProps, dispatchProps, any>(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(LoaderComponent));

export type LoaderContainerProps = stateProps & dispatchProps;