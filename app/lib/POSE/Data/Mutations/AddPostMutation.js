"use strict";
const Relay = require("react-relay");
class AddPostMutation extends Relay.Mutation {
    getFatQuery() {
    }
    getConfigs() {
        return [{
                type: 'RANGE_ADD',
                connectionName: 'post',
                edgeName: 'newPostEdge',
                rangeBehaviors: {
                    '': 'append'
                }
            }];
    }
    getMutation() {
    }
    getVariables() {
        return {
            content: this.props.Content,
            sharingProviders: this.props.SharingProviders
        };
    }
}
AddPostMutation.fragments = {};
module.exports = AddPostMutation;
//# sourceMappingURL=AddPostMutation.js.map