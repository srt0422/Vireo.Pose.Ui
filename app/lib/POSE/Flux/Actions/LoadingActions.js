"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Store_1 = require("../Store");
var ActionNames_1 = require("../ActionNames");
//use variable declaration to make rewire work in unit tests
var store = Store_1.default;
function StartLoading() {
    store.dispatch({ type: ActionNames_1.default.START_LOADING });
}
exports.StartLoading = StartLoading;
function StopLoading() {
    store.dispatch({ type: ActionNames_1.default.STOP_LOADING });
}
exports.StopLoading = StopLoading;
