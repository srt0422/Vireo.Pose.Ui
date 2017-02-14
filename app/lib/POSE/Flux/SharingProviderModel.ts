import Backbone = require("backbone");

//module POSE.Flux {
class SharingProviderModel extends Backbone.Model implements ISharingProviderModelProps {
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

    public setExpirationDate(expiresIn: number) {

        var expirationDate = new Date();

        expirationDate.setSeconds(expiresIn);
        
        this.set("ExpirationDate", expirationDate);
    }
}

export = SharingProviderModel;
//}