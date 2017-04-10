import { PureComponent } from "react";
import PostStore from "../../Flux/Stores/PostStore";
import renderer from "./SocialMediaOptionComponentRenderer/renderer";
var postStore = PostStore;
export default class SocialMediaOption extends PureComponent {
    render() {
        return renderer.call(this);
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
