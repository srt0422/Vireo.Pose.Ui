import * as React from "react";
import renderer from "./SharingContentComponentRenderer/renderer";

export class SharingContentComponent extends React.Component {
    render() {
        return renderer.call(this);
    }
}
export default SharingContentComponent;
