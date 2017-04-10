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
var PostStore_1 = require("../../Flux/Stores/PostStore");
var renderer_1 = require("./PoserRenderer/renderer");
var LoadingActions = require("../../Flux/Actions/LoadingActions");
var loadingActions = LoadingActions;
var postStore = PostStore_1.default;
var Poser = (function (_super) {
    __extends(Poser, _super);
    function Poser(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.typeMap = {
            Message: "text",
            Link: "text",
            Picture: "file"
        };
        _this.labelMap = {
            Message: "What would you like to say?",
            Link: "What would you like to share?",
            Picture: "What would you like to show?"
        };
        _this.contentMap = {
            Message: "Send a Message",
            Link: "Share a Link",
            Picture: "Show a Picture"
        };
        _this.typeChanged = _this.typeChanged.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    Poser.prototype.render = function () {
        return renderer_1.default.call(this);
    };
    Poser.prototype.onClick = function () {
        postStore.setContent(this.postValue);
        postStore.save()
            .then(function () { return loadingActions.StopLoading(); })
            .catch(function () { return loadingActions.StopLoading(); });
        loadingActions.StartLoading();
    };
    //TODO: find out why ios picker always resets to devault value
    Poser.prototype.componentWillMount = function () {
        this.setState({
            type: "text",
            value: "Message"
        });
    };
    Poser.prototype.typeChanged = function (options) {
        this.setState({
            value: options.value,
            type: options.type
        });
    };
    return Poser;
}(React.Component));
exports.default = Poser;
//export default connect((store) => { return { loading: store.Loading }; })(Poser);
//export default Relay.createContainer<any>(Poser, {
//    fragments: {
//        post: () => postStore.getFragment()
//    }
//});
