import { Router, Route, hashHistory } from "react-router";
import * as Routes from "./Enums/Routes";
import * as React from "react";
import App from "../App";
export class AppRouter extends React.Component {
    render() {
        return (<Router history={hashHistory}>
                <Route path={Routes.App} component={App}></Route>
            </Router>);
    }
}
export default AppRouter;
