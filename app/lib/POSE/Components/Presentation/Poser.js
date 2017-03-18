import * as React from "react";
import PostStore from "../../Flux/Stores/PostStore";
import renderer from "./PoserRenderer/renderer";
var postStore = PostStore;
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
        postStore.save();
    }
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
//# sourceMappingURL=Poser.js.map