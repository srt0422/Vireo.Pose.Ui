import * as React from "react";
import PostStore from "../../Flux/Stores/PostStore";
import renderer from "./SocialMediaOptionComponentRenderer/renderer";
var postStore = PostStore;
export default class SocialMediaOption extends React.Component {
    render() {
        return renderer.call(this);
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
    constructor() {
        super();
        this.onSelected = this.onSelected.bind(this);
    }
}
