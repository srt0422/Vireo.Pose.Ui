import * as React from "react";

import { IPOSESharingContentComponentProps } from "./Interfaces/IPOSESharingContentComponentProps";

import { IPOSESharingContentComponentState } from "./Interfaces/IPOSESharingContentComponentState";

import renderer from "./SharingContentComponentRenderer/renderer";

export class SharingContentComponent extends React.Component<IPOSESharingContentComponentProps, IPOSESharingContentComponentState>
{
    public render() {
        return renderer.call(this)
    }
}

export default SharingContentComponent;
