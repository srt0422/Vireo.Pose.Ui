import Relay = require("react-relay");

class AddSharingProviderMutation extends Relay.Mutation<any, any> {
    // This mutation declares a dependency on the faction
    // into which this ship is to be introduced.
    public static fragments = {
        user: () => Relay.QL`fragment on User
                                  {
                                     id,
                                     sharingProviders
                                  }`
    };

    // Adding a sharingProvider will add it to a user's sharingProviders, so we
    // specify the user's sharingProviders connection as part of the fat query.
    public getFatQuery() {
        return Relay.QL`fragment on AddSharingProviderPayload {
                                user { sharingProviders },
                                newSharingProviderEdge,
                            }`;
    }

    public getConfigs() {
        return [{
            type: 'RANGE_ADD',
            parentName: 'user',
            parentID: this.props.user.id,
            connectionName: 'sharingProviders',
            edgeName: 'newSharingProviderEdge',
            rangeBehaviors: {
                // When the sharingProviders connection is not under the influence
                // of any call, append the sharringProvider to the end of the connection
                '': 'append'
            }
        }];
    }

    public getMutation() {
        return Relay.QL`mutation{checkHidingSpotForTreasure}`;
    }

    public getVariables() {
        return {
            id: this.props.user.id
        };
    }
}

export = AddSharingProviderMutation;
