import * as React from 'react';
import {AppContainerProps} from '../../containers/AppContainer';

export class AppView extends React.Component<AppContainerProps> {
    constructor(props:AppContainerProps) {
        super(props);
    }
    handlerChange = (e:React.FormEvent<HTMLInputElement>) => {
        console.log('value', e.currentTarget.value);
        this.props.changeName(e.currentTarget.value);
    }
    render() {
        const {name} = this.props;
        return  <div className="width-100">
                    <input type="text" onChange={this.handlerChange} value={name}/>
                    <div>{name}</div>
                </div>;
    }
}