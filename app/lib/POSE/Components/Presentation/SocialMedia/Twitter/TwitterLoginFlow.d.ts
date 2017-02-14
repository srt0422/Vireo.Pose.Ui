import Backbone = require("backbone");
declare class TwitterLoginFlow extends Backbone.Model {
    url: string;
    oauth_token: string;
    private oAuth;
    constructor();
    login(callbackUrl: string): void;
}
export = TwitterLoginFlow;
