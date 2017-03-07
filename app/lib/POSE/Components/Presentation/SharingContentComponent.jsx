"use strict";
const React = require("react");
const renderer = require("./SharingContentComponentRenderer/renderer");
class SharingContentComponent extends React.Component {
    render() {
        return renderer.call(this);
    }
}
module.exports = SharingContentComponent;
//# sourceMappingURL=SharingContentComponent.jsx.map