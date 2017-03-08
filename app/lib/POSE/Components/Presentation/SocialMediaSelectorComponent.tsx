import renderer from "./SocialMediaSelectorComponentRenderer/renderer";
import * as React from "react";
import ISocialMediaSelectorComponent from "./Interfaces/ISocialMediaSelectorComponent";

const styles = require("../../styles");

export class SocialMediaSelectorComponent extends React.Component<ISocialMediaSelectorComponent, any>{
    public render() {
        return renderer.call(this);
    }
}

export default SocialMediaSelectorComponent;
