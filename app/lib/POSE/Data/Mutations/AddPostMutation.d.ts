/// <reference types="react-relay" />
import * as Relay from "react-relay";
declare class AddPostMutation extends Relay.Mutation<any, any> {
    static fragments: {};
    getFatQuery(): void;
    getConfigs(): {
        type: string;
        connectionName: string;
        edgeName: string;
        rangeBehaviors: {
            '': string;
        };
    }[];
    getMutation(): void;
    getVariables(): {
        content: any;
        sharingProviders: any;
    };
}
export = AddPostMutation;
