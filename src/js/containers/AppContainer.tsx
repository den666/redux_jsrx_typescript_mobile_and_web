import { connect, Dispatch } from 'react-redux';
import { AppInterface } from '../initialState/appInterface';
import { CHANGE_NAME } from '../actions/appActions';
import { IS_WEB } from '../constants/environment';
import { withRouter } from 'react-router-dom';

interface stateProps {
    name: string
}

interface dispatchProps {
    changeName: Function
}

const mapStateToProps = (state:AppInterface): stateProps => {
    console.log(state);
    return {
        name: state.appReducer.name
    };
};


const mapDispatchToProps = (dispatch:Dispatch<any>): dispatchProps => {
    return {
        changeName: (text:string) => {
            dispatch({
                type: CHANGE_NAME,
                payload: text
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
                    ? require('../components/webComponents/AppView')
                    : require('../components/mobileComponents/AppView');

export default withRouter(connect<stateProps, dispatchProps, any>(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AppView));

export type AppContainerProps = stateProps & dispatchProps;