import { Router, Route, hashHistory } from "react-router";
import * as Routes from "./Enums/Routes";
import * as React from "react";
import * as Relay from "react-relay";

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from "../../Flux/reducers";
import App from "../App";

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(hashHistory)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
let store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

export class AppRouter extends React.Component<any, any> {
    public render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory} /*createElement={this.createRelayContainer}*/ >
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