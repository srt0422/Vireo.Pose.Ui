import * as React from "react";
import Routes = require("../Routing/Enums/Routes");
import PostModel from "../../Flux/PostModel";
import PostStore from "../../Flux/Stores/PostStore";
import SocialOptions = require("../SocialProviders");
import ReactRouter = require("react-router");
import Relay = require("react-relay");
import renderer from "./PoserRenderer/renderer";
import * as LoadingActions from "../../Flux/Actions/LoadingActions";
var postStore: PostModel = PostStore;
var loadingActions = LoadingActions;

export default class Poser extends React.Component<PoserProps, any>
{
    public postValue: string;

    public render() {
        return renderer.call(this);
    }

    public onClick() {

        postStore.setContent(this.postValue);

        postStore.save().then(()=> loadingActions.StopLoading());

        loadingActions.StartLoading();
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
    styles?: { "center-block"?: string, clearfix?: "string", sharingComponent? : string };
}

//export default Relay.createContainer<any>(Poser, {
//    fragments: {
//        post: () => postStore.getFragment()
//    }
//});
