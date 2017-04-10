import { createStore, combineReducers, applyMiddleware } from "redux";
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from "./reducers";
export var History = createHistory();
const middleware = routerMiddleware(History);
let store;
export default store = createStore(combineReducers(Object.assign({}, reducers, { router: routerReducer })), applyMiddleware(middleware));
