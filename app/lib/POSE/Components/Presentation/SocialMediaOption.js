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
var react_1 = require("react");
var PostStore_1 = require("../../Flux/Stores/PostStore");
var renderer_1 = require("./SocialMediaOptionComponentRenderer/renderer");
var postStore = PostStore_1.default;
var SocialMediaOption = (function (_super) {
    __extends(SocialMediaOption, _super);
    function SocialMediaOption() {
        var _this = _super.call(this) || this;
        _this.onSelected = _this.onSelected.bind(_this);
        return _this;
    }
    SocialMediaOption.prototype.render = function () {
        return renderer_1.default.call(this);
    };
    SocialMediaOption.prototype.componentWillMount = function () {
        this.setState({ selected: false });
    };
    SocialMediaOption.prototype.componentWillUpdate = function (nextProps, nextState) {
        // update flux store to track selected sharingProviders
        if (nextState.selected) {
            postStore.tryAddSharingProvider(this.props.value);
        }
        else {
            postStore.removeSharingProvider(this.props.value);
        }
    };
    SocialMediaOption.prototype.onSelected = function (e) {
        this.setState({ selected: !this.state.selected });
    };
    return SocialMediaOption;
}(react_1.PureComponent));
exports.default = SocialMediaOption;
