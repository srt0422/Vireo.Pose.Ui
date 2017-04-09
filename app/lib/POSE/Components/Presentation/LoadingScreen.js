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
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require("react");
var LoadingScreen = (function (_super) {
    __extends(LoadingScreen, _super);
    function LoadingScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingScreen.prototype.render = function () {
        var _a = this.props.styles, loadingScreen = _a.loadingScreen, loadingIcon = _a.loadingIcon;
        if (this.props.loading) {
            return (<div className={this.props.styles.loadingScreen}>
                    <i className={this.props.styles.loadingIcon}/>
                </div>);
        }
        else
            return (null);
    };
    return LoadingScreen;
}(React.Component));
exports.default = LoadingScreen;
