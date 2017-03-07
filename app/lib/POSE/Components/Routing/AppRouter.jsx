"use strict";
const ReactRouter = require("react-router");
const Routes = require("./Enums/Routes");
const React = require("react");
const Relay = require("react-relay");
const App_1 = require("../App");
const Poser_1 = require("../Presentation/Poser");
//import SocialAuth = require("SocialAuth");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
class AppRouter extends React.Component {
    render() {
        return (<Router history={ReactRouter.hashHistory}>
                <Route path={Routes.App} component={App_1.default}>
                    <Route path={Routes.Pose} component={Poser_1.default}></Route>
                </Route>
            </Router>);
    }
    createRelayContainer(Component, props) {
        if (Relay.isContainer(Component)) {
            // Construct the RelayQueryConfig from the route and the router props.
            var route = props.route;
            var { params } = props;
            return (<Relay.RootContainer Component={Component} renderFetched={(data) => <Component {...props} {...data}/>} route={{ params: params, name: route.path, queries: route.queries || {} }}/>);
        }
        else {
            return <Component {...props}/>;
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppRouter;
//# sourceMappingURL=AppRouter.jsx.map