//module POSE.Flux {
class SharingProviderModel extends Backbone.Model {
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
    ///TODO: test this to make sure "ExpirationDate" is correct for the
    ///      ios and web implementations of FacebookManager
    setExpirationDate(expiresIn) {
        var expirationDate = new Date();
        expirationDate.setSeconds(expiresIn);
        this.set("ExpirationDate", expirationDate);
    }
}
//}
