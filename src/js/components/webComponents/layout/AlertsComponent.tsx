import * as React from 'react';
import {AlertsContainerProps} from '../../../containers/layoutContainers/AlertsContainer';

export class AlertsComponent extends React.Component<AlertsContainerProps, any> {
    constructor(props:AlertsContainerProps) {
        super(props);
        this.state = {
            alertsStyles: {
                position: 'fixed',
                right: 0,
                top: 0
            },
            alertsStylesItem: {
                color: '#fff',
                width: '200px',
                padding: '10px',
                backgroundColor: '#454545',
                boderRadius: 5,
                textAlign: 'center',
                marginBottom: 1
            }
        };
    }
    render() {
        const {alertsList} = this.props;
        return (
            alertsList.length > 0 &&
            <div style={this.state.alertsStyles}>
                {alertsList.map((item, key) => {
                    return <div key={key} style={this.state.alertsStylesItem}>
                                <span>{item.toUpperCase()}</span>
                            </div>;
                })}
            </div>
        );
    }
}