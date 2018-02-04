import * as React from 'react';
import AppContainer from './containers/viewContainers/AppContainer';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ROUTES } from './constants/AppRoutes';
import { history } from './reducerInterface/configureStore';
import AlertsContainer from './containers/layoutContainers/AlertsContainer';
import LoaderContainer from './containers/layoutContainers/LoaderContainer';

const Fade = ({ children, ...props }:any) => (
    <CSSTransition
        {...props}
        timeout={{
            enter: 600,
            exit: 500,
        }}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);

export default class WebApp extends React.Component<{}> {
    constructor(props:{}) {
        super(props);
    }
    render() {
        return (
            <ConnectedRouter history={history}>
                <Route render={({location}) => {
                    return (
                        <div>
                            <TransitionGroup className="main-app-transition">
                                <Fade key={location.key}>
                                    <Switch location={location}>
                                        <Route exact
                                               path={ROUTES.HOME}
                                               component={AppContainer}/>
                                    </Switch>
                                </Fade>
                            </TransitionGroup>
                            <AlertsContainer/>
                            <LoaderContainer/>
                        </div>
                    );
                }}/>
            </ConnectedRouter>
        );
    }
}