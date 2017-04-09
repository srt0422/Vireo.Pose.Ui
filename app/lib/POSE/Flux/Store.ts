import { createStore, combineReducers, applyMiddleware, Store as ReduxStore } from "redux";
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import * as reducers from "./reducers";

export var History = createHistory();

const middleware = routerMiddleware(History);

export type Store = {
    Loading: boolean;
};

let store: ReduxStore<Store>;

export default store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
) as ReduxStore<Store>;