import Facebook from "./Facebook/FacebookAuthentication";
import Twitter from "./Twitter/TwitterAuthentication";

import React = require("react");
import SocialProviders from "../../SocialProviders";

import PostStore = require("../../../Flux/Stores/PostStore");

class SocialAuth extends React.Component<any, any>{
    authenticateFacebook: boolean;
    authenticateTwitter: boolean;

    public render() {
        return (
            <div>
                <Facebook sharingProvider={this.getFacebookProvider()}
                          shouldAuthenticate={() => this.authenticateFacebook}
                          setAuthCallback={null}></Facebook>
            </div>
        );
    }

    componentWillMount() {
        for (var i = 0; i < PostStore.SharingProviders.length; i++) {

            var provider = PostStore.SharingProviders.models[i];

            if (provider.Name == SocialProviders.Facebook) {
                this.authenticateFacebook = true;
            }
        }
    }

    private getFacebookProvider(): ISharingProviderModelProps {
        for (var i = 0; i < PostStore.SharingProviders.length; i++) {

            var provider = PostStore.SharingProviders.models[i];

            if (provider.Name == SocialProviders.Facebook) {
                return provider;
            }
        }
    }
}

export = SocialAuth;

// <Twitter shouldAuthenticate={() => this.authenticateTwitter}
//          sharingProvider={this.getTwitterProvider()}></Twitter>
