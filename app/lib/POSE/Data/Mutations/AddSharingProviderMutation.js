class AddSharingProviderMutation extends Relay.Mutation {
    getFatQuery() {
        return Relay.QL `fragment on AddSharingProviderPayload {
                                user { sharingProviders },
                                newSharingProviderEdge,
                            }`;
    }
    getConfigs() {
        return [{
                type: 'RANGE_ADD',
                parentName: 'user',
                parentID: this.props.user.id,
                connectionName: 'sharingProviders',
                edgeName: 'newSharingProviderEdge',
                rangeBehaviors: {
                    '': 'append'
                }
            }];
    }
    getMutation() {
        return Relay.QL `mutation{checkHidingSpotForTreasure}`;
    }
    getVariables() {
        return {
            id: this.props.user.id
        };
    }
}
AddSharingProviderMutation.fragments = {
    user: () => Relay.QL `fragment on User
                                  {
                                     id,
                                     sharingProviders
                                  }`
};
