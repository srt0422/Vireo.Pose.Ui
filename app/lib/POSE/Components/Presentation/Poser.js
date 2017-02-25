"use strict";
const React = require("react");
const PostStore = require("../../Flux/Stores/PostStore");
const renderer_1 = require("./PoserRenderer/renderer");
const styles = require("../../styles/styles");
var formStyle = {
    marginTop: "15px",
    width: "40%",
    minWidth: "250px"
};
var postStore = PostStore;
class Poser extends React.Component {
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
        return renderer_1.default.call(this);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Poser;
