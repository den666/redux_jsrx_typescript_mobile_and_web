import * as React from 'react';
import {AppContainerProps} from '../../../containers/viewContainers/AppContainer';

export class AppView extends React.Component<AppContainerProps> {
    constructor(props:AppContainerProps) {
        super(props);
    }
    render() {
        const { showLoader, showAlert } = this.props;
        return  <div className="width-100">
                    <div>
                        <a onClick={() => showLoader()}>show loader</a>
                    </div>
                    <div>
                        <a onClick={() => showAlert()}>show alert</a>
                    </div>
                </div>;
    }
}