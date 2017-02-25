"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const SocialMediaAuthentiationWrapper = require("./../SocialMediaAuthentiationWrapper");
const FacebookSdk = require("./FacebookSdk");
const config_1 = require("./../../../../../../config/config");
const AuthBase_1 = require("../AuthBase");
class FacebookAuthentication extends AuthBase_1.default {
    render() {
        if (!this.props.shouldAuthenticate()) {
            return null;
        }
        return (<SocialMediaAuthentiationWrapper setAuthCallback={this.setAuthCallback} shouldAuthenticate={this.props.shouldAuthenticate} sharingProvider={null}>
              <FacebookSdk appId={config_1.default.FacebookAppId} onLoad={this.ensureLoggedIn}></FacebookSdk>
          </SocialMediaAuthentiationWrapper>);
    }
    componentDidMount() { }
    ensureLoggedIn() {
        FB.getLoginStatus((response) => {
            if (response.status !== 'connected') {
                FB.login((response) => console.log(response));
            }
            this.props.sharingProvider.UserId = parseInt(response.authResponse.userID);
            this.props.sharingProvider.AuthToken = response.authResponse.accessToken;
            var expirationDate = new Date();
            expirationDate.setSeconds(response.authResponse.expiresIn);
            this.props.sharingProvider.ExpirationDate = expirationDate;
            this.authCallback(this.props.sharingProvider);
        });
    }
}
exports.default = FacebookAuthentication;
