import * as Relay from "react-relay";
class AddPostMutation extends Relay.Mutation {
    // Adding a post will not currently affect any other entities
    getFatQuery() {
        // return Relay.QL`
        //     fragment on AddPostPayload {
        //         newPostEdge
        //     }
        // `;
    }
    getConfigs() {
        return [{
                type: 'RANGE_ADD',
                connectionName: 'post',
                edgeName: 'newPostEdge',
                rangeBehaviors: {
                    // When the post connection is not under the influence
                    // of any call, append the post to the end of the connection
                    '': 'append'
                }
            }];
    }
    getMutation() {
        // return Relay.QL`mutation{addPost}`;
    }
    getVariables() {
        return {
            content: this.props.Content,
            sharingProviders: this.props.SharingProviders
        };
    }
}
// only the post fragment
AddPostMutation.fragments = {};
