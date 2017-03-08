import ReactRouter = require("react-router");
import Routes = require("./Enums/Routes");
import * as React from "react";
import Relay = require("react-relay");
import App from "../App";

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

export default class AppRouter extends React.Component<any, any> {
    public render() {
        return (
            <Router history={ReactRouter.hashHistory}
            //createElement={this.createRelayContainer}
            >
                <Route path={Routes.App} component={App}></Route>
            </Router>
        );
    }

    protected createRelayContainer(Component, props) {
        if (Relay.isContainer(Component)) {
            // Construct the RelayQueryConfig from the route and the router props.
            var route = props.route;
            var { params } = props;

            return (
                <Relay.RootContainer
                    Component={Component}
                    renderFetched={(data) => <Component {...props} {...data} />}
                    route={{ params, name: route.path, queries: route.queries || {} }}
                />
            );
        } else {
            return <Component {...props} />;
        }
    }
}
