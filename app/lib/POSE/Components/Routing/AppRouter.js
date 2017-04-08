import { Router, Route, hashHistory } from "react-router";
import * as Routes from "./Enums/Routes";
import * as React from "react";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from "../../Flux/reducers";
import App from "../App";
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(hashHistory);
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
let store = createStore(combineReducers(Object.assign({}, reducers, { router: routerReducer })), applyMiddleware(middleware));
export class AppRouter extends React.Component {
    render() {
        return (<Provider store={store}>
                <Router history={hashHistory} /*createElement={this.createRelayContainer}*/>
                    <Route path={Routes.App} component={App}></Route>
                </Router>
            </Provider>);
    }
}
export default AppRouter;
