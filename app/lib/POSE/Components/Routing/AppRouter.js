import { Router, Route } from "react-router";
import * as Routes from "./Enums/Routes";
import * as React from "react";
import { Provider } from 'react-redux';
import App from "../App";
import store, { History as browserHistory } from "../../Flux/Store";
//store.subscribe(() => console.log(store.getState()));
export class AppRouter extends React.Component {
    render() {
        return (<Provider store={store}>
                <Router history={browserHistory} /*createElement={this.createRelayContainer}*/>
                    <Route path={Routes.App} component={App}></Route>
                </Router>
            </Provider>);
    }
}
export default AppRouter;
