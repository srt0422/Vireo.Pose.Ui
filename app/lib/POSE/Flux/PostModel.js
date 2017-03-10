///<reference path="../../../../typings/index.d.ts" />
let Platform;
try {
    Platform = require("react-native");
}
catch (e) { }
import WebBackbone from "backbone";
const Backbone = Platform && Platform.OS ? RNBackbone.default : WebBackbone;
import SharingProviderCollection from "./SharingProviderCollection";
import SharingProviderModel from "./SharingProviderModel";
import SocialProviders from "../Components/SocialProviders";
import config from "../../../config/config";
import * as FacebookManager from "../SocialMedia/FacebookManager";
import * as LinkedinManager from "../SocialMedia/LinkedinManager";
import * as TwitterManager from "../SocialMedia/TwitterManager";
export default class PostModel extends Backbone.Model {
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
            case SocialProviders.Facebook:
                this.addFacebookSharingProvider();
                break;
            case SocialProviders.LinkedIn:
                this.addLinkedInSharingProvider();
                break;
            case SocialProviders.Twitter:
                this.addTwitterSharingProvider();
                break;
        }
    }
    addTwitterSharingProvider() {
        TwitterManager.ensureLoggedIn()
            .then(() => {
            var sharingProvider = this.addNewSharingProvider(SocialProviders.Twitter);
            TwitterManager.fillSharingProviderWithAuthInfo(sharingProvider);
        })
            .catch((err) => {
            console.log(arguments);
        });
    }
    addFacebookSharingProvider() {
        FacebookManager.ensur;
        eLoggedIn()
            .then((response) => {
            let sharingProvider = this.addNewSharingProvider(SocialProviders.Facebook);
            FacebookManager.fillSharingProviderWithAuthInfo(sharingProvider);
        })
            .catch((err) => {
            throw err;
        });
    }
    addLinkedInSharingProvider() {
        LinkedinManager.ensureLoggedIn()
            .then(() => {
            var sharingProvider = this.addNewSharingProvider(SocialProviders.LinkedIn);
            LinkedinManager.fillSharingProviderWithAuthInfo(sharingProvider);
        })
            .catch((err) => {
            throw err;
        });
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
