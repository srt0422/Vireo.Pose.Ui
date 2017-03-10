import renderer from "./SocialMediaSelectorComponentRenderer/renderer";
import * as React from "react";
const styles = require("../../styles");
export class SocialMediaSelectorComponent extends React.Component {
    render() {
        return renderer.call(this);
    }
}
export default SocialMediaSelectorComponent;
