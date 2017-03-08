import * as React from "react";
import PostStore from "../../Flux/Stores/PostStore";
import PostModel from "../../Flux/PostModel";
import renderer from "./SocialMediaOptionComponentRenderer/renderer";
import IPOSESocialMediaOptionProps from "./Interfaces/IPOSESocialMediaOptionProps";

const styles = require("../../styles");

var postStore: PostModel = PostStore;

export default class SocialMediaOption extends React.Component<IPOSESocialMediaOptionProps, any>{

    public render() {
        return renderer.call(this);
    }

    public componentWillMount() {
        this.setState({ selected: false });
    }

    public componentWillUpdate(nextProps: IPOSESocialMediaOptionProps, nextState) {
        // update flux store to track selected sharingProviders

        if (nextState.selected) {
            postStore.tryAddSharingProvider(this.props.value);
        }
        else {
            postStore.removeSharingProvider(this.props.value);
        }
    }

    private onSelected(e: React.SyntheticEvent) {
        this.setState({ selected: !this.state.selected });
    }

    constructor() {
        super();
        this.onSelected = this.onSelected.bind(this);
    }
}
