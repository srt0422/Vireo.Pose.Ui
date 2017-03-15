
import * as React from "react";
import renderer from "./SharingInputComponentRenderer/renderer";

export class SharingInputComponent extends React.Component<any, any>
{
    public render() {
        return renderer.call(this);
    }
}

export default SharingInputComponent;
