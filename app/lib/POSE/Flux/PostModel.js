"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Platform;
try {
    Platform = require("react-native").Platform;
}
catch (e) { }
const WebBackbone = require("backbone");
const RNBackbone = require("react-native-backbone");
const Backbone = Platform && Platform.OS ? RNBackbone.default : WebBackbone;
const SharingProviderCollection_1 = require("./SharingProviderCollection");
const SharingProviderModel_1 = require("./SharingProviderModel");
const SocialProviders_1 = require("../Components/SocialProviders");
const config_1 = require("../../../config/config");
const AddPostMutation = require("../Data/Mutations/AddPostMutation");
const FacebookManager = require("../SocialMedia/FacebookManager");
const LinkedinManager = require("../SocialMedia/LinkedinManager");
const TwitterManager = require("../SocialMedia/TwitterManager");
class PostModel extends Backbone.Model {
    constructor() {
        super(...arguments);
        this.SharingProviders = new SharingProviderCollection_1.default();
        this.url = config_1.default.SharingUrl + "Sharing/api/Post";
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
        TwitterManager.ensureLoggedIn()
            .then(() => {
            var sharingProvider = this.addNewSharingProvider(SocialProviders_1.default.Twitter);
            TwitterManager.fillSharingProviderWithAuthInfo(sharingProvider);
        })
            .catch((err) => {
            throw err;
        });
    }
    addFacebookSharingProvider() {
        FacebookManager.ensureLoggedIn()
            .then((response) => {
            let sharingProvider = this.addNewSharingProvider(SocialProviders_1.default.Facebook);
            FacebookManager.fillSharingProviderWithAuthInfo(sharingProvider);
        })
            .catch((err) => {
            throw err;
        });
    }
    addLinkedInSharingProvider() {
        LinkedinManager.ensureLoggedIn()
            .then(() => {
            var sharingProvider = this.addNewSharingProvider(SocialProviders_1.default.LinkedIn);
            LinkedinManager.fillSharingProviderWithAuthInfo(sharingProvider);
        })
            .catch((err) => {
            throw err;
        });
    }
    addNewSharingProvider(name) {
        return this.SharingProviders.add(new SharingProviderModel_1.default({ Name: name }, null), null);
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
//# sourceMappingURL=PostModel.js.map