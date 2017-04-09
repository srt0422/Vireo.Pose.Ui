"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
require("../Authentication/authenticationManager");
var Store_1 = require("../Flux/Store");
var store = Store_1.default; // set a variable that can be tested with rewire (ref: ../../../../__tests__/web/unit/AppComponentTests.web.tsx)
var renderer_1 = require("./AppRenderer/renderer");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Store = store;
        return _this;
    }
    App.prototype.render = function () {
        return renderer_1.default.call(this);
    };
    return App;
}(React.Component));
exports.App = App;
exports.default = react_redux_1.connect(function (store) {
    if (store && store.uiReducer) {
        return { loading: store.uiReducer.Loading };
    }
    return { loading: false };
})(App);
