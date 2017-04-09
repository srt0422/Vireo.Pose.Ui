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
//module POSE.Html {
var React = require("react");
var BootstrapContainerLayout = (function (_super) {
    __extends(BootstrapContainerLayout, _super);
    function BootstrapContainerLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BootstrapContainerLayout.prototype.render = function () {
        return (<div className={this.props.styles.container}>
                <div className={this.props.styles.row}>
                    <div className={this.props.styles["col-sm-12"]}>
                        {this.props.children}
                    </div>
                </div>
            </div>);
    };
    return BootstrapContainerLayout;
}(React.Component));
exports.default = BootstrapContainerLayout;
//export = BootstrapContainerLayout;
//} 
