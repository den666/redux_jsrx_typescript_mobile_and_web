import * as React from 'react';
import {LoaderContainerProps} from '../../../containers/layoutContainers/LoaderContainer';

export class LoaderComponent extends React.Component<LoaderContainerProps, any> {
    constructor(props:LoaderContainerProps) {
        super(props);
        this.state = {
            loaderClass: {
                position: 'fixed',
                backgroundColor: 'rgba(0,0,0,.5)',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: 18
            }
        };
    }
    render() {
        const {loaderList} = this.props;
        return (
            loaderList.length > 0 &&
                <div style={this.state.loaderClass}>
                    loading
                </div>
        );
    }
}