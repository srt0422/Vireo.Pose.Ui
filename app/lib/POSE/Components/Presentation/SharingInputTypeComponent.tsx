
import React = require("react");
import renderer = require("./SharingInputTypeComponentRenderer/renderer");

const styles = require("../../styles");

class SharingInputTypeComponent extends React.Component<any, any>
{
    public render() {
        return renderer.call(this);
    }
}

export = SharingInputTypeComponent;
