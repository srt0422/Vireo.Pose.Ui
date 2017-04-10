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
var Backbone = require("backbone");
//module POSE.Flux {
var SharingProviderModel = (function (_super) {
    __extends(SharingProviderModel, _super);
    function SharingProviderModel(attributes, options) {
        var _this = _super.call(this, attributes, options) || this;
        for (var key in attributes) {
            _this[key] = attributes[key];
        }
        return _this;
    }
    SharingProviderModel.prototype.setAuthToken = function (authToken) {
        this.set("AuthToken", authToken);
    };
    SharingProviderModel.prototype.setName = function (name) {
        this.set("Name", name);
    };
    SharingProviderModel.prototype.setUserId = function (userId) {
        this.set("UserId", userId);
    };
    SharingProviderModel.prototype.setAuthSecret = function (authSecret) {
        this.set("AuthSecret", authSecret);
    };
    ///TODO: test this to make sure "ExpirationDate" is correct for the
    ///      ios and web implementations of FacebookManager
    SharingProviderModel.prototype.setExpirationDate = function (expiresIn) {
        var expirationDate = new Date();
        expirationDate.setSeconds(expiresIn);
        this.set("ExpirationDate", expirationDate);
    };
    return SharingProviderModel;
}(Backbone.Model));
exports.SharingProviderModel = SharingProviderModel;
exports.default = SharingProviderModel;
//}
