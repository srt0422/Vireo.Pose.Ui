"use strict";
const React = require("react");
function renderer() {
    if (!this.props.shouldAuthenticate()) {
        return null;
    }
    return (<SocialMediaAuthentiationWrapper setAuthCallback={this.setAuthCallback} shouldAuthenticate={this.props.shouldAuthenticate} sharingProvider={null}>
          <FacebookSdk appId={config.get("FacebookAppId")} onLoad={this.ensureLoggedIn}></FacebookSdk>
      </SocialMediaAuthentiationWrapper>);
}
exports.renderer = renderer;
function onFBLoaded() {
    initializeFBSdk();
    if (this.props.onLoad) {
        this.props.onLoad();
    }
}
function initializeFBSdk() {
    if (FB && FB.init) {
        FB.init({
            appId: this.props.appId,
            xfbml: true,
            version: 'v2.4'
        });
        return;
    }
    console.warn("FB failed to load");
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = renderer;
//# sourceMappingURL=renderer.jsx.map