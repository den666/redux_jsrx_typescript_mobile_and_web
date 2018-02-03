import { connect, Dispatch } from 'react-redux';
import { AppInterface } from '../../reducerInterface/appInterface';
import { DEMO_ALERTS, DEMO_LOADER } from '../../actions/appActions';
import { IS_WEB } from '../../constants/environment';
import { withRouter } from 'react-router-dom';

interface stateProps {
}

interface dispatchProps {
    showLoader: Function,
    showAlert: Function
}

const mapStateToProps = (state:AppInterface): stateProps => {
    return {
    };
};


const mapDispatchToProps = (dispatch:Dispatch<any>): dispatchProps => {
    return {
        showLoader: () => {
            dispatch({
                type: DEMO_LOADER,
            });
        },
        showAlert: () => {
            dispatch({
                type: DEMO_ALERTS,
            });
        }
    };
};


const mergeProps = (stateProps: stateProps, dispatchProps: dispatchProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
    };
};

const {AppView} =   IS_WEB
                    ? require('../../components/webComponents/views/AppView')
                    : require('../../components/mobileComponents/views/AppView');

export default withRouter(connect<stateProps, dispatchProps, any>(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AppView));

export type AppContainerProps = stateProps & dispatchProps;