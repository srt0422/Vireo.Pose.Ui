"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PostStore = require("../../Flux/Stores/PostStore");
const renderer_1 = require("./SocialMediaOptionComponentRenderer/renderer");
const styles = require("../../styles");
var postStore = PostStore;
class SocialMediaOption extends React.Component {
    constructor() {
        super();
        this.onSelected = this.onSelected.bind(this);
    }
    render() {
        return renderer_1.default.call(this);
    }
    componentWillMount() {
        this.setState({ selected: false });
    }
    componentWillUpdate(nextProps, nextState) {
        // update flux store to track selected sharingProviders
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
}
exports.default = SocialMediaOption;
//# sourceMappingURL=SocialMediaOption.js.map