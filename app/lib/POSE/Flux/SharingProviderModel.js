import * as Backbone from "backbone";
export class SharingProviderModel extends Backbone.Model {
    constructor(attributes, options) {
        super(attributes, options);
        for (var key in attributes) {
            this[key] = attributes[key];
        }
    }
    setAuthToken(authToken) {
        this.set("AuthToken", authToken);
    }
    setName(name) {
        this.set("Name", name);
    }
    setUserId(userId) {
        this.set("UserId", userId);
    }
    setAuthSecret(authSecret) {
        this.set("AuthSecret", authSecret);
    }
    setExpirationDate(expiresIn) {
        var expirationDate = new Date();
        expirationDate.setSeconds(expiresIn);
        this.set("ExpirationDate", expirationDate);
    }
}
export default SharingProviderModel;
