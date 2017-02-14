import React = require("react");
import SharingInputTypeComponent = require("./SharingInputTypeComponent");
import {IPOSESharingContentComponentProps} from "./Interfaces/IPOSESharingContentComponentProps";
import renderer = require("./SharingContentComponentRenderer/renderer");

class SharingContentComponent extends React.Component<IPOSESharingContentComponentProps, IPOSESharingContentComponentState>
{
    public render() {
        return renderer.call(this)
    }
}

export = SharingContentComponent;
