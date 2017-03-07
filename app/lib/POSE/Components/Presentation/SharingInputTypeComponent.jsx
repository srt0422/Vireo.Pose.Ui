"use strict";
const React = require("react");
const renderer = require("./SharingInputTypeComponentRenderer/renderer");
const styles = require("../../styles");
class SharingInputTypeComponent extends React.Component {
    render() {
        return renderer.call(this);
    }
}
module.exports = SharingInputTypeComponent;
//# sourceMappingURL=SharingInputTypeComponent.jsx.map