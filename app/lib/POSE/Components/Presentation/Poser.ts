import * as React from "react";
import Routes = require("../Routing/Enums/Routes");
import PostModel from "../../Flux/PostModel";
import PostStore from "../../Flux/Stores/PostStore";
import SocialOptions = require("../SocialProviders");
import ReactRouter = require("react-router");
import Relay = require("react-relay");
import renderer from "./PoserRenderer/renderer";

import styles = require("../../styles/styles");

var formStyle = {
    marginTop: "15px",
    width: "40%",
    minWidth: "250px"
};

var postStore: PostModel = PostStore;

//set this up as a relay container
export default class Poser extends React.Component<PoserProps, any>
{
    private postValue: string;

    public render() {
        return renderer.call(this);
    }

    public onClick() {
        postStore.setContent(this.postValue);

        postStore.save();
    }
    //TODO: find out why ios picker always resets to devault value
    public componentWillMount() {
        this.setState({
            type: "text",
            value: "Message"
        });
    }

    public typeChanged(options) {
        this.setState({
            value: options.value,
            type: options.type
        } as IPOSESharingContentComponentState);
    }

    constructor(props?, context?) {
        super(props, context);

        this.typeChanged = this.typeChanged.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    private typeMap = {
        Message: "text",
        Link: "text",
        Picture: "file"
    }

    private labelMap = {
        Message: "What would you like to say?",
        Link: "What would you like to share?",
        Picture: "What would you like to show?"
    }

    private contentMap = {
        Message: "Send a Message",
        Link: "Share a Link",
        Picture: "Show a Picture"
    }
}

export interface PoserProps extends React.Props<Poser> {
    navigator?: Navigator;
}

//export default Relay.createContainer<any>(Poser, {
//    fragments: {
//        post: () => postStore.getFragment()
//    }
//});
