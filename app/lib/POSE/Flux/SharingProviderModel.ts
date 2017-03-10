import * as Backbone from "backbone";

import ISharingProviderModelProps from "./Interfaces/ISharingProviderModelProps";

//module POSE.Flux {
export class SharingProviderModel extends Backbone.Model {
    public Name: string;
    public UserId: number;
    public AuthToken: string;
    public ExpirationDate: Date

    constructor(attributes: ISharingProviderModelProps, options) {
        super(attributes, options);

        for (var key in attributes) {
            this[key] = attributes[key];
        }
    }

    public setAuthToken(authToken: string) {
        this.set("AuthToken", authToken);
    }

    public setName(name: string) {
        this.set("Name", name);
    }

    public setUserId(userId: string) {
        this.set("UserId", userId);
    }

    public setAuthSecret(authSecret: string) {
        this.set("AuthSecret", authSecret);
    }

    ///TODO: test this to make sure "ExpirationDate" is correct for the
    ///      ios and web implementations of FacebookManager
    public setExpirationDate(expiresIn: number) {

        var expirationDate = new Date();

        expirationDate.setSeconds(expiresIn);

        this.set("ExpirationDate", expirationDate);
    }
}

export default SharingProviderModel;
//}
