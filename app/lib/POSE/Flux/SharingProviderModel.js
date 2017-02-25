"use strict";
const Backbone = require("backbone");
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
    setExpirationDate(expiresIn) {
        var expirationDate = new Date();
        expirationDate.setSeconds(expiresIn);
        this.set("ExpirationDate", expirationDate);
    }
}
module.exports = SharingProviderModel;
