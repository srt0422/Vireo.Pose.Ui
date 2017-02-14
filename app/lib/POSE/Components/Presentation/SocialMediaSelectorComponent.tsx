import renderer from "./SocialMediaSelectorComponentRenderer/renderer";
import React = require("react");

const styles = require("../../styles");

class SocialMediaSelectorComponent extends React.Component<ISocialMediaSelectorComponent, any>{
    public render() {
        return renderer.call(this);
    }
}

export = SocialMediaSelectorComponent;
