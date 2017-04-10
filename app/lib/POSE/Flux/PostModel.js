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
var Platform;
try {
    Platform = require("react-native").Platform;
}
catch (e) { }
var WebBackbone = require("backbone");
var RNBackbone = require("react-native-backbone");
var Backbone = Platform && Platform.OS ? RNBackbone.default : WebBackbone;
var SharingProviderCollection_1 = require("./SharingProviderCollection");
var SharingProviderModel_1 = require("./SharingProviderModel");
var SocialProviders_1 = require("../Components/SocialProviders");
var config_1 = require("../../../config/config");
//import AddPostMutation = require("../Data/Mutations/AddPostMutation");
var FacebookManager = require("../SocialMedia/FacebookManager");
var LinkedinManager = require("../SocialMedia/LinkedinManager");
var TwitterManager = require("../SocialMedia/TwitterManager");
var LoadingActions = require("./Actions/LoadingActions");
var loadingActions = LoadingActions;
var PostModel = (function (_super) {
    __extends(PostModel, _super);
    function PostModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SharingProviders = new SharingProviderCollection_1.default();
        _this.url = config_1.default.SharingUrl + "Sharing/api/Post";
        return _this;
    }
    PostModel.prototype.initialize = function () {
        this.on("change", this.onChange);
    };
    PostModel.prototype.onChange = function (model, options) {
        for (var optionKey in model.changed) {
            model[optionKey] = options[optionKey];
        }
    };
    PostModel.prototype.setContent = function (value) {
        this.set("Content", value);
    };
    PostModel.prototype.sharingProviderExists = function (name) {
        return this.getSharingProvider(name) != null;
    };
    PostModel.prototype.tryAddSharingProvider = function (name) {
        if (this.sharingProviderExists(name))
            return;
        var loginPromise;
        loadingActions.StartLoading();
        switch (name) {
            case SocialProviders_1.default.Facebook:
                loginPromise = this.addFacebookSharingProvider();
                break;
            case SocialProviders_1.default.LinkedIn:
                loginPromise = this.addLinkedInSharingProvider();
                break;
            case SocialProviders_1.default.Twitter:
                loginPromise = this.addTwitterSharingProvider();
                break;
        }
        loginPromise.then(loadingActions.StopLoading).catch(loadingActions.StopLoading);
    };
    PostModel.prototype.addTwitterSharingProvider = function () {
        var _this = this;
        return TwitterManager.ensureLoggedIn()
            .then(function () {
            if (_this.sharingProviderExists(SocialProviders_1.default.Twitter))
                return;
            var sharingProvider = _this.addNewSharingProvider(SocialProviders_1.default.Twitter);
            TwitterManager.fillSharingProviderWithAuthInfo(sharingProvider);
        })
            .catch(function (err) {
            throw err;
        });
    };
    PostModel.prototype.addFacebookSharingProvider = function () {
        var _this = this;
        return FacebookManager.ensureLoggedIn()
            .then(function (response) {
            if (_this.sharingProviderExists(SocialProviders_1.default.Facebook))
                return;
            var sharingProvider = _this.addNewSharingProvider(SocialProviders_1.default.Facebook);
            FacebookManager.fillSharingProviderWithAuthInfo(sharingProvider);
        })
            .catch(function (err) {
            throw err;
        });
    };
    PostModel.prototype.addLinkedInSharingProvider = function () {
        var _this = this;
        return LinkedinManager.ensureLoggedIn()
            .then(function () {
            if (_this.sharingProviderExists(SocialProviders_1.default.LinkedIn))
                return;
            var sharingProvider = _this.addNewSharingProvider(SocialProviders_1.default.LinkedIn);
            LinkedinManager.fillSharingProviderWithAuthInfo(sharingProvider);
        })
            .catch(function (err) {
            throw err;
        });
    };
    PostModel.prototype.addNewSharingProvider = function (name) {
        return this.SharingProviders.add(new SharingProviderModel_1.default({ Name: name }, null), null);
    };
    PostModel.prototype.removeSharingProvider = function (sharingProviderName) {
        var provider = this.getSharingProvider(sharingProviderName);
        this.SharingProviders.remove(provider);
    };
    PostModel.prototype.getSharingProviderId = function (sharingProviderName) {
        var sp = this.getSharingProvider(sharingProviderName);
        return sp.cid;
    };
    PostModel.prototype.getSharingProvider = function (sharingProviderName) {
        return this.SharingProviders.findWhere({ Name: sharingProviderName });
    };
    PostModel.prototype.toAddMutation = function () {
        return new AddPostMutation(this.toJSON());
    };
    PostModel.prototype.getFragment = function () {
        return AddPostMutation.getFragment("post");
    };
    PostModel.prototype.toJSON = function () {
        var json = _super.prototype.toJSON.call(this);
        json.SharingProviders = this.SharingProviders.toJSON();
        return json;
    };
    return PostModel;
}(Backbone.Model));
exports.default = PostModel;
