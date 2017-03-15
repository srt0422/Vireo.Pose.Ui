import * as React from "react";
import App from "../App";
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
export default class AppRouter extends React.Component {
    render() {
        return (<Router history={ReactRouter.hashHistory}>
                <Route path={Routes.App} component={App}></Route>
            </Router>);
    }
    createRelayContainer(Component, props) {
        if (Relay.isContainer(Component)) {
            // Construct the RelayQueryConfig from the route and the router props.
            var route = props.route;
            var { params } = props;
            return (<Relay.RootContainer Component={Component} renderFetched={(data) => <Component {...props} {...data}/>} route={{ params, name: route.path, queries: route.queries || {} }}/>);
        }
        else {
            return <Component {...props}/>;
        }
    }
}
