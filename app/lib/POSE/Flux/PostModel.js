"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SharingProviderCollection = require("./SharingProviderCollection");
const SharingProviderModel = require("./SharingProviderModel");
const SocialProviders_1 = require("../Components/SocialProviders");
const Backbone = require("backbone");
const TwitterLoginHelper = require("../Components/Presentation/SocialMedia/Twitter/TwitterLoginFlow");
const config = require("../../../config/config");
var twitterLoginHelper = new TwitterLoginHelper();
const AddPostMutation = require("../Data/Mutations/AddPostMutation");
const FacebookManager = require("../SocialMedia/FacebookManager");
class PostModel extends Backbone.Model {
    constructor() {
        super(...arguments);
        this.SharingProviders = new SharingProviderCollection();
        this.url = config.SharingUrl + "Sharing/api/Post";
    }
    initialize() {
        this.on("change", this.onChange);
    }
    onChange(model, options) {
        for (var optionKey in model.changed) {
            model[optionKey] = options[optionKey];
        }
    }
    setContent(value) {
        this.set("Content", value);
    }
    sharingProviderExists(name) {
        return this.getSharingProvider(name) != null;
    }
    tryAddSharingProvider(name) {
        if (this.sharingProviderExists(name))
            return;
        switch (name) {
            case SocialProviders_1.default.Facebook:
                this.addFacebookSharingProvider();
                break;
            case SocialProviders_1.default.LinkedIn:
                this.addLinkedInSharingProvider();
                break;
            case SocialProviders_1.default.Twitter:
                this.addTwitterSharingProvider();
                break;
        }
    }
    addTwitterSharingProvider() {
        if (twitterLoginHelper.getOAuthToken() == null) {
            twitterLoginHelper.login("addTwitterSharingProvider");
        }
        else {
            var sharingProvider = this.addNewSharingProvider(SocialProviders_1.default.Twitter);
            sharingProvider.setAuthToken(twitterLoginHelper.getOAuthToken());
        }
    }
    addFacebookSharingProvider() {
        FacebookManager.ensureLoggedIn()
            .then((response) => {
            var sharingProvider = this.addNewSharingProvider(SocialProviders_1.default.Facebook);
            sharingProvider.setExpirationDate(response.authResponse.expiresIn);
            sharingProvider.setUserId(response.authResponse.userID);
            sharingProvider.setAuthToken(response.authResponse.accessToken);
        });
    }
    addLinkedInSharingProvider() {
        IN.User.authorize((optios) => {
            var sharingProvider = this.addNewSharingProvider(SocialProviders_1.default.LinkedIn);
            sharingProvider.setAuthToken(IN.ENV.auth.oauth_token);
        }, this);
    }
    addNewSharingProvider(name) {
        return this.SharingProviders.add(new SharingProviderModel({ Name: name }, null), null);
    }
    removeSharingProvider(sharingProviderName) {
        var provider = this.getSharingProvider(sharingProviderName);
        this.SharingProviders.remove(provider);
    }
    getSharingProviderId(sharingProviderName) {
        var sp = this.getSharingProvider(sharingProviderName);
        return sp.cid;
    }
    getSharingProvider(sharingProviderName) {
        return this.SharingProviders.findWhere({ Name: sharingProviderName });
    }
    toAddMutation() {
        return new AddPostMutation(this.toJSON());
    }
    getFragment() {
        return AddPostMutation.getFragment("post");
    }
    toJSON() {
        var json = super.toJSON();
        json.SharingProviders = this.SharingProviders.toJSON();
        return json;
    }
}
exports.default = PostModel;
