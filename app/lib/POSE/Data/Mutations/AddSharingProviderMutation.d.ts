/// <reference types="react-relay" />
import Relay = require("react-relay");
declare class AddSharingProviderMutation extends Relay.Mutation<any, any> {
    static fragments: {
        user: () => string;
    };
    getFatQuery(): string;
    getConfigs(): {
        type: string;
        parentName: string;
        parentID: any;
        connectionName: string;
        edgeName: string;
        rangeBehaviors: {
            '': string;
        };
    }[];
    getMutation(): string;
    getVariables(): {
        id: any;
    };
}
export = AddSharingProviderMutation;
