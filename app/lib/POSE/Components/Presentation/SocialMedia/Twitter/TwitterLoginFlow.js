"use strict";
// ﻿import {OAuth as OAuthHelper} from "oauth";
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
        // this.oauthProvider = new OAuthHelper(
        //     'https://api.twitter.com/oauth/request_token',
        //     'https://api.twitter.com/oauth/access_token',
        //     '4jtgZPwRFMtCXXjuWadM2MqNC',
        //     '3BWXE5somBM2AZAjNDA1t2m4IEc5fxLoH25xwCXLqHGjgN9qdS',
        //     '1.0A',
        //     null,
        //     'HMAC-SHA1');
    }
    getAuthorizationToken(data) {
        return this.oauthProvider.getOAuthRequestToken(function () {
            console.log(arguments);
        });
    }
}
module.exports = TwitterLoginFlow;
//}
