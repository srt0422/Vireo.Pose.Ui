"use strict";
const FacebookAuthentication_1 = require("./Facebook/FacebookAuthentication");
const React = require("react");
const SocialProviders_1 = require("../../SocialProviders");
const PostStore = require("../../../Flux/Stores/PostStore");
class SocialAuth extends React.Component {
    render() {
        return (<div>
                <FacebookAuthentication_1.default sharingProvider={this.getFacebookProvider()} shouldAuthenticate={() => this.authenticateFacebook} setAuthCallback={null}></FacebookAuthentication_1.default>
            </div>);
    }
    componentWillMount() {
        for (var i = 0; i < PostStore.SharingProviders.length; i++) {
            var provider = PostStore.SharingProviders.models[i];
            if (provider.Name == SocialProviders_1.default.Facebook) {
                this.authenticateFacebook = true;
            }
        }
    }
    getFacebookProvider() {
        for (var i = 0; i < PostStore.SharingProviders.length; i++) {
            var provider = PostStore.SharingProviders.models[i];
            if (provider.Name == SocialProviders_1.default.Facebook) {
                return provider;
            }
        }
    }
}
module.exports = SocialAuth;
