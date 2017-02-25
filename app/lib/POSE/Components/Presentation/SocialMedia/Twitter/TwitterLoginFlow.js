"use strict";
const Backbone = require("backbone");
let OAuth;
class TwitterLoginFlow extends Backbone.Model {
    constructor() {
        super();
        this.url = "https://api.twitter.com/oauth/request_token";
        this.oauth_token = null;
        this.oAuth = new OAuthRequestHelper();
    }
    login(callbackUrl) {
        this.set("oauth_callback", callbackUrl);
        this.oauth_token = this.oAuth.getAuthorizationToken(this.attributes);
    }
    getOAuthToken() {
        return this.oauth_token;
    }
}
class OAuthRequestHelper {
    constructor() {
    }
    getAuthorizationToken(data) {
        return this.oauthProvider.getOAuthRequestToken(function () {
            console.log(arguments);
        });
    }
}
module.exports = TwitterLoginFlow;
