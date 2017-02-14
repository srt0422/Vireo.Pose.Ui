"use strict";
const React = require("react");
// import AddSharingProviderMutation = require("AddSharingProviderMutation");
class SocialMediaAuthentiationWrapper extends React.Component {
    constructor() {
        super();
        this.authCallback = this.authCallback.bind(this);
    }
    render() {
        if (this.props.shouldAuthenticate()) {
            this.props.setAuthCallback(this.authCallback);
            return this.props.children;
        }
    }
    authCallback() {
        // this.props.relay.commitUpdate(
        //     new AddSharingProviderMutation()
        // );
    }
}
SocialMediaAuthentiationWrapper.defaultProps = {
    shouldAuthenticate: () => true
};
module.exports = SocialMediaAuthentiationWrapper;
