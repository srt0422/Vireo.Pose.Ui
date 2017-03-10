import * as React from "react";
import renderer from "./SharingInputComponentRenderer/renderer";
class SharingInputComponent extends React.Component {
    render() {
        return renderer.call(this);
    }
}
