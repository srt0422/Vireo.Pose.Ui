declare var FB;

import React = require("react");
import SocialMediaAuthentiationWrapper = require("./../SocialMediaAuthentiationWrapper");
import FacebookSdk = require("./FacebookSdk");
import config from "./../../../../../../config/config";
import AuthBase from "../AuthBase";

export default class FacebookAuthentication extends AuthBase {

    render() {
      if (!this.props.shouldAuthenticate()) {
          return null;
      }

      return (
          <SocialMediaAuthentiationWrapper  setAuthCallback={this.setAuthCallback}
                                            shouldAuthenticate={this.props.shouldAuthenticate}
                                            sharingProvider={null}>
              <FacebookSdk appId={config.FacebookAppId as string} onLoad={this.ensureLoggedIn}></FacebookSdk>
          </SocialMediaAuthentiationWrapper>
      );
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
