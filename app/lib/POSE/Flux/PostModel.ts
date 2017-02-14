///<reference path="../../../../typings/index.d.ts" />

import SharingProviderCollection = require("./SharingProviderCollection");

import SharingProviderModel = require("./SharingProviderModel");

import SocialProviders from "../Components/SocialProviders";

import Backbone = require("backbone");

import TwitterLoginHelper = require("../Components/Presentation/SocialMedia/Twitter/TwitterLoginFlow");

import config = require("../../../config/config");

var twitterLoginHelper: ITwitterLoginHelper = new TwitterLoginHelper();

import AddPostMutation = require("../Data/Mutations/AddPostMutation");

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
        if (twitterLoginHelper.getOAuthToken() == null) {
            twitterLoginHelper.login("addTwitterSharingProvider");
        }
        else {
            var sharingProvider = this.addNewSharingProvider(SocialProviders.Twitter);

            sharingProvider.setAuthToken(twitterLoginHelper.getOAuthToken());
        }
    }

    public addFacebookSharingProvider() {

        FB.getLoginStatus((response) => {

            if (response.status !== 'connected') {
                FB.login((response) => console.log(response));
            }

            var sharingProvider = this.addNewSharingProvider(SocialProviders.Facebook)

            sharingProvider.setExpirationDate(response.authResponse.expiresIn);

            sharingProvider.setUserId(response.authResponse.userID);
            sharingProvider.setAuthToken(response.authResponse.accessToken);

        });
    }

    public addLinkedInSharingProvider() {

        IN.User.authorize(
            (optios) => {
                var sharingProvider = this.addNewSharingProvider(SocialProviders.LinkedIn);

                sharingProvider.setAuthToken(IN.ENV.auth.oauth_token);

                //IN.API.Raw("/people/~/shares?format=json")
                //    .method("POST")
                //    .body(JSON.stringify({
                //        "comment": "Check out developer.linkedin.com! http://linkd.in/1FC2PyG",
                //        "visibility": {
                //            "code": "anyone"
                //        }
                //    }))
                //    .result((options) => console.log(options))
                //    .error((options) => console.log(options));

                //console.log(sharingProvider);
            },
            this
        );

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
