"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var createBrowserHistory_1 = require("history/createBrowserHistory");
var react_router_redux_1 = require("react-router-redux");
var reducers = require("./reducers");
exports.History = createBrowserHistory_1.default();
var middleware = react_router_redux_1.routerMiddleware(exports.History);
var store;
exports.default = store = redux_1.createStore(redux_1.combineReducers(__assign({}, reducers, { router: react_router_redux_1.routerReducer })), redux_1.applyMiddleware(middleware));
