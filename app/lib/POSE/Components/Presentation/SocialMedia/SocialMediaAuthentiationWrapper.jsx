"use strict";
const React = require("react");
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
    }
}
SocialMediaAuthentiationWrapper.defaultProps = {
    shouldAuthenticate: () => true
};
module.exports = SocialMediaAuthentiationWrapper;
