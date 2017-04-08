import * as React from "react";
import PostStore from "../../Flux/Stores/PostStore";
import renderer from "./PoserRenderer/renderer";
import * as LoadingActions from "../../Flux/Actions/LoadingActions";
var postStore = PostStore;
var loadingActions = LoadingActions;
export default class Poser extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.typeMap = {
            Message: "text",
            Link: "text",
            Picture: "file"
        };
        this.labelMap = {
            Message: "What would you like to say?",
            Link: "What would you like to share?",
            Picture: "What would you like to show?"
        };
        this.contentMap = {
            Message: "Send a Message",
            Link: "Share a Link",
            Picture: "Show a Picture"
        };
        this.typeChanged = this.typeChanged.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    render() {
        return renderer.call(this);
    }
    onClick() {
        postStore.setContent(this.postValue);
        postStore.save().then(() => loadingActions.StopLoading());
        loadingActions.StartLoading();
    }
    //TODO: find out why ios picker always resets to devault value
    componentWillMount() {
        this.setState({
            type: "text",
            value: "Message"
        });
    }
    typeChanged(options) {
        this.setState({
            value: options.value,
            type: options.type
        });
    }
}
//export default Relay.createContainer<any>(Poser, {
//    fragments: {
//        post: () => postStore.getFragment()
//    }
//});
