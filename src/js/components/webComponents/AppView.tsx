import * as React from 'react';
import {AppContainerProps} from '../../containers/AppContainer';

export class AppView extends React.Component<AppContainerProps> {
    constructor(props:AppContainerProps) {
        super(props);
    }
    render() {
        const {} = this.props;
        return  <div className="width-100">
                    den
                </div>;
    }
}
