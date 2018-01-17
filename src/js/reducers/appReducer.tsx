import {AnyAction} from 'redux';

const appReducer = (state:any, action: AnyAction): any => {
    switch (action.type) {
        default:
            return {
                ...state
            };
    }
};

export default appReducer;