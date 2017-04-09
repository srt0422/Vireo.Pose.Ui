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

import * as LoadingActions from "./Actions/LoadingActions";
var loadingActions = LoadingActions;

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

        let loginPromise;

        loadingActions.StartLoading();

        switch (name) {
            case SocialProviders.Facebook:

                loginPromise = this.addFacebookSharingProvider();

                break;

            case SocialProviders.LinkedIn:

                loginPromise = this.addLinkedInSharingProvider();

                break;

            case SocialProviders.Twitter:

                loginPromise = this.addTwitterSharingProvider();

                break;
        }

        loginPromise.then(loadingActions.StopLoading).catch(loadingActions.StopLoading);
    }

    public addTwitterSharingProvider() {

        return TwitterManager.ensureLoggedIn()
            .then(() => {

                if (this.sharingProviderExists(SocialProviders.Twitter)) return;

                var sharingProvider = this.addNewSharingProvider(SocialProviders.Twitter);

                TwitterManager.fillSharingProviderWithAuthInfo(sharingProvider);
            })
            .catch((err) => {
                throw err;
            });
    }

    public addFacebookSharingProvider() {

        return FacebookManager.ensureLoggedIn()
            .then((response) => {

                if (this.sharingProviderExists(SocialProviders.Facebook)) return;

                let sharingProvider = this.addNewSharingProvider(SocialProviders.Facebook)

                FacebookManager.fillSharingProviderWithAuthInfo(sharingProvider);
            })
            .catch((err) => {
                throw err;
            });
    }

    public addLinkedInSharingProvider() {

        return LinkedinManager.ensureLoggedIn()
            .then(() => {

                if (this.sharingProviderExists(SocialProviders.LinkedIn)) return;

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
