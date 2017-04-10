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
var renderer_1 = require("./SharingContentComponentRenderer/renderer");
var SharingContentComponent = (function (_super) {
    __extends(SharingContentComponent, _super);
    function SharingContentComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SharingContentComponent.prototype.render = function () {
        return renderer_1.default.call(this);
    };
    return SharingContentComponent;
}(React.Component));
exports.SharingContentComponent = SharingContentComponent;
exports.default = SharingContentComponent;
