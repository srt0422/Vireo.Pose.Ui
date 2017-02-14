
import React = require("react");
import renderer = require("./SharingInputComponentRenderer/renderer");

class SharingInputComponent extends React.Component<any, any>
{
    public render() {
        return renderer.call(this);
    }
}

export = SharingInputComponent;
