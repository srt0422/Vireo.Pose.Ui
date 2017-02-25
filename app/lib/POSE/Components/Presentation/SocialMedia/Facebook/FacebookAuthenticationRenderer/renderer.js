"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const SocialMediaAuthentiationWrapper = require("../../SocialMediaAuthentiationWrapper");
const FacebookSdk = require("../FacebookSdk");
const config_1 = require("../../../../../../../config/config");
function renderer() {
    if (!this.props.shouldAuthenticate()) {
        return null;
    }
    return (<SocialMediaAuthentiationWrapper setAuthCallback={this.setAuthCallback} shouldAuthenticate={this.props.shouldAuthenticate} sharingProvider={null}>
          <FacebookSdk appId={config_1.default.FacebookAppId} onLoad={this.ensureLoggedIn}></FacebookSdk>
      </SocialMediaAuthentiationWrapper>);
}
exports.renderer = renderer;
exports.default = renderer;
