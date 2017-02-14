// ﻿import {OAuth as OAuthHelper} from "oauth";
import Backbone = require("backbone");

let OAuth: any;

class TwitterLoginFlow extends Backbone.Model implements ITwitterLoginHelper {

    url = "https://api.twitter.com/oauth/request_token";
    oauth_token = null;
    private oAuth: OAuthRequestHelper;

    constructor() {
        super();

        this.oAuth = new OAuthRequestHelper();
    }

    public login(callbackUrl: string) {
        this.set("oauth_callback", callbackUrl);

        this.oauth_token = this.oAuth.getAuthorizationToken(this.attributes);
    }

    public getOAuthToken() {
        return this.oauth_token;
    }
}

class OAuthRequestHelper {

    oauthProvider: OAuthHelper;

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

    public getAuthorizationToken(data) {

        return this.oauthProvider.getOAuthRequestToken(function () {
            console.log(arguments);
        });
    }

    //        var oAuthHeaders = {
    //    oauth_consumer_key: "4jtgZPwRFMtCXXjuWadM2MqNC",
    //    oauth_nonce: UUID.generate(),
    //    oauth_signature_method: "HMAC-SHA1",
    //    oauth_timestamp: "1318622958",
    //    oauth_token: this.oauth_token,
    //    oauth_version: ""
    //};

    //var oauth_signature = "";
    //var queryString = "OAuth ";

    //for (var key in oAuthHeaders) {
    //    var value = oAuthHeaders[key];

    //    queryString += key + "=" + value + ",";
    //    oauth_signature += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    //}

    //queryString = queryString.substr(0, queryString.length - 2);
    //oauth_signature = oauth_signature.substr(0, queryString.length - 2);
}

export = TwitterLoginFlow;
//}
