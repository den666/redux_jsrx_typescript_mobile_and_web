import {connect, Dispatch} from 'react-redux';
import {AppInterface} from '../../reducerInterface/appInterface';
import {IS_WEB} from '../../constants/environment';
import { withRouter } from 'react-router-dom';

interface stateProps {
    alertsList: string[]
}

interface dispatchProps {
}

const mapStateToProps = (state:AppInterface): stateProps => {
    return {
        alertsList: state.alertsReducer.alertsList
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

const {AlertsComponent} =   IS_WEB
                    ? require('../../components/webComponents/layout/AlertsComponent')
                    : require('../../components/mobileComponents/layout/AlertsComponent');

export default withRouter(connect<stateProps, dispatchProps, any>(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AlertsComponent));

export type AlertsContainerProps = stateProps & dispatchProps;
