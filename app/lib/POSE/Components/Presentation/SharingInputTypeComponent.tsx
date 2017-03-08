
import * as React from "react";

import renderer from "./SharingInputTypeComponentRenderer/renderer";

const styles = require("../../styles");

export class SharingInputTypeComponent extends React.Component<any, any>
{
    public render() {
        return renderer.call(this);
    }
}

export default SharingInputTypeComponent;
