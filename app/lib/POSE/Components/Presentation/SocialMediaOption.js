"use strict";
const React = require("react");
const PostStore = require("../../Flux/Stores/PostStore");
const renderer_1 = require("./SocialMediaOptionComponentRenderer/renderer");
const styles = require("../../styles");
var postStore = PostStore;
class SocialMediaOption extends React.Component {
    render() {
        return renderer_1.default.call(this);
    }
    componentWillMount() {
        this.setState({ selected: false });
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextState.selected) {
            postStore.tryAddSharingProvider(this.props.value);
        }
        else {
            postStore.removeSharingProvider(this.props.value);
        }
    }
    onSelected(e) {
        this.setState({ selected: !this.state.selected });
    }
    constructor() {
        super();
        this.onSelected = this.onSelected.bind(this);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SocialMediaOption;
