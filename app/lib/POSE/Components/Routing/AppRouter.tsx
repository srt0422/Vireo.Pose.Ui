import { Router, Route } from "react-router";
import createHistory from 'history/createBrowserHistory';
import * as Routes from "./Enums/Routes";
import * as React from "react";
import * as Relay from "react-relay";

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import App from "../App";

import store, { History as browserHistory } from "../../Flux/Store";

//store.subscribe(() => console.log(store.getState()));

export class AppRouter extends React.Component<any, any> {
    public render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory} /*createElement={this.createRelayContainer}*/ >
                    <Route path={Routes.App} component={App}></Route>
                </Router>
            </Provider>
        );
    }

    //protected createRelayContainer(Component, props) {
    //    if (Relay.isContainer(Component)) {
    //        // Construct the RelayQueryConfig from the route and the router props.
    //        var route = props.route;
    //        var { params } = props;

    //        return (
    //            <Relay.RootContainer
    //                Component={Component}
    //                renderFetched={(data) => <Component {...props} {...data} />}
    //                route={{ params, name: route.path, queries: route.queries || {} }}
    //            />
    //        );
    //    } else {
    //        return <Component {...props} />;
    //    }
    //}
}

export default AppRouter;