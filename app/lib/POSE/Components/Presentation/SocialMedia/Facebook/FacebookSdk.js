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
var FacebookSdk = (function (_super) {
    __extends(FacebookSdk, _super);
    function FacebookSdk() {
        var _this = _super.call(this) || this;
        _this.initializeFBSdk = _this.initializeFBSdk.bind(_this);
        _this.onFBLoaded = _this.onFBLoaded.bind(_this);
        return _this;
    }
    FacebookSdk.prototype.render = function () {
        return null;
    };
    FacebookSdk.prototype.componentWillMount = function () {
        (function (d, s, id, callback) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            var onreadystatechange = js.onload = function () {
                var state = s["readyState"];
                if (!callback["done"] && (!state || /loaded|complete/.test(state))) {
                    callback["done"] = true;
                    callback();
                }
            };
            js["onreadystatechange"] = onreadystatechange;
            if (fjs) {
                fjs.parentNode.insertBefore(js, fjs);
            }
            else {
                document.head.appendChild(js);
            }
        }(document, 'script', 'facebook-jssdk', this.onFBLoaded));
    };
    FacebookSdk.prototype.onFBLoaded = function () {
        this.initializeFBSdk();
        if (this.props.onLoad) {
            this.props.onLoad();
        }
    };
    FacebookSdk.prototype.initializeFBSdk = function () {
        if (FB && FB.init) {
            FB.init({
                appId: this.props.appId,
                xfbml: true,
                version: 'v2.4'
            });
            return;
        }
        console.warn("FB failed to load");
    };
    return FacebookSdk;
}(React.Component));
exports.FacebookSdk = FacebookSdk;
exports.default = FacebookSdk;
