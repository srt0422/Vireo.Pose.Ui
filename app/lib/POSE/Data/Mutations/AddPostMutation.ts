import * as Relay from "react-relay";

class AddPostMutation extends Relay.Mutation<any, any> {
    // only the post fragment
    public static fragments = {
        // post: Relay.QL`
        //     fragment on Post {
        //         content,
        //         sharingProviders
        //     }
        // `
    };

    // Adding a post will not currently affect any other entities
    public getFatQuery() {
        // return Relay.QL`
        //     fragment on AddPostPayload {
        //         newPostEdge
        //     }
        // `;
    }

    public getConfigs() {
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

    public getMutation() {
        // return Relay.QL`mutation{addPost}`;
    }

    public getVariables() {
        return {
            content: this.props.Content,
            sharingProviders: this.props.SharingProviders
        };
    }
}

export = AddPostMutation;
