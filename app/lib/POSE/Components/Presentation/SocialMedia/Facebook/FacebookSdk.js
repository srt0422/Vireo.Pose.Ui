"use strict";
const React = require("react");
const renderer_1 = require("./FacebookSdkRenderer/renderer");
class FacebookSdk extends React.Component {
    render() {
        return renderer_1.default.call(this);
    }
    componentWillMount() {
    }
}
module.exports = FacebookSdk;
