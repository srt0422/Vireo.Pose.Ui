"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReactRouter = require("react-router");
const Routes = require("./Enums/Routes");
const React = require("react");
const Relay = require("react-relay");
const App_1 = require("../App");
const Poser_1 = require("../Presentation/Poser");
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
            var route = props.route;
            var { params } = props;
            return (<Relay.RootContainer Component={Component} renderFetched={(data) => <Component {...props} {...data}/>} route={{ params, name: route.path, queries: route.queries || {} }}/>);
        }
        else {
            return <Component {...props}/>;
        }
    }
}
exports.default = AppRouter;
