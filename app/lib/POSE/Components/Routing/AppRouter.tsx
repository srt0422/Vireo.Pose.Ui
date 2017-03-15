import { Router, Route, hashHistory } from "react-router";
import * as Routes from "./Enums/Routes";
import * as React from "react";
import * as Relay from "react-relay";
import App from "../App";

export class AppRouter extends React.Component<any, any> {
    public render() {
        return (
            <Router history={hashHistory}
            //createElement={this.createRelayContainer}
            >
                <Route path={Routes.App} component={App}></Route>
            </Router>
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