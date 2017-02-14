"use strict";
const React = require("react");
const renderer = require("./SharingInputComponentRenderer/renderer");
class SharingInputComponent extends React.Component {
    render() {
        return renderer.call(this);
    }
}
module.exports = SharingInputComponent;
