
interface ITwitterLoginHelper extends Backbone.Model {

    url: string;
    oauth_token: string;
    //oAuth: IOAuthRequestHelper;

    getOAuthToken(): string;
    login(callbackUrl: string);
}

interface IOAuthRequestHelper {

    oauthProvider: OAuth.OAuth;

    getAuthorizationToken(data): any;
}
