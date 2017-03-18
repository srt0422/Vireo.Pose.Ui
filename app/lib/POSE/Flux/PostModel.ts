let Platform;
try {
    Platform = require("react-native").Platform;
}
catch (e) { }

import * as WebBackbone from "backbone";
import RNBackbone = require("react-native-backbone");

const Backbone: Function = Platform && Platform.OS ? RNBackbone.default : WebBackbone;

import SharingProviderCollection from "./SharingProviderCollection";

import SharingProviderModel from "./SharingProviderModel";

import SocialProviders from "../Components/SocialProviders";

import config from "../../../config/config";

//import AddPostMutation = require("../Data/Mutations/AddPostMutation");

import * as FacebookManager from "../SocialMedia/FacebookManager";
import * as LinkedinManager from "../SocialMedia/LinkedinManager";
import * as TwitterManager from "../SocialMedia/TwitterManager";

export default class PostModel extends Backbone.Model {

    public Content: string;
    public SharingProviders = new SharingProviderCollection();

    public url = config.SharingUrl + "Sharing/api/Post";

    public initialize() {
        this.on("change", this.onChange);
    }

    public onChange(model, options) {

        for (var optionKey in model.changed) {
            model[optionKey] = options[optionKey];
        }
    }

    public setContent(value: string) {
        this.set("Content", value);
    }

    public sharingProviderExists(name: string) {

        return this.getSharingProvider(name) != null;
    }

    public tryAddSharingProvider(name: string) {

        if (this.sharingProviderExists(name)) return;

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

    public addTwitterSharingProvider() {

        TwitterManager.ensureLoggedIn()
            .then(() => {
                var sharingProvider = this.addNewSharingProvider(SocialProviders.Twitter);

                TwitterManager.fillSharingProviderWithAuthInfo(sharingProvider);
            })
            .catch((err) => {
                throw err;
            });
    }

    public addFacebookSharingProvider() {

        FacebookManager.ensureLoggedIn()
            .then((response) => {

                let sharingProvider = this.addNewSharingProvider(SocialProviders.Facebook)

                FacebookManager.fillSharingProviderWithAuthInfo(sharingProvider);
            })
            .catch((err) => {
                throw err;
            });
    }

    public addLinkedInSharingProvider() {

        LinkedinManager.ensureLoggedIn()
            .then(() => {

                var sharingProvider = this.addNewSharingProvider(SocialProviders.LinkedIn);

                LinkedinManager.fillSharingProviderWithAuthInfo(sharingProvider);
            })
            .catch((err) => {
                throw err;
            });
    }

    public addNewSharingProvider(name: string) {
        return this.SharingProviders.add(new SharingProviderModel({ Name: name }, null), null);
    }

    public removeSharingProvider(sharingProviderName: any) {
        var provider = this.getSharingProvider(sharingProviderName);

        this.SharingProviders.remove(provider);
    }

    public getSharingProviderId(sharingProviderName) {
        var sp = this.getSharingProvider(sharingProviderName);

        return sp.cid;
    }

    public getSharingProvider(sharingProviderName) {
        return this.SharingProviders.findWhere({ Name: sharingProviderName });
    }

    public toAddMutation() {
        return new AddPostMutation(this.toJSON());
    }

    public getFragment() {

        return AddPostMutation.getFragment("post")
    }

    public toJSON() {
        var json = super.toJSON();

        json.SharingProviders = this.SharingProviders.toJSON();

        return json;
    }
}
