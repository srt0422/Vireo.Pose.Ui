"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Platform, process;
try {
    Platform = require("react-native");
}
catch (e) {
}
finally {
    // const {Platform} = ReactNative;
    if (Platform && (Platform.OS === "ios" || Platform.OS !== "android")) {
        process = {
            env: {
                NODE_ENV: "production"
            }
        };
    }
    else {
        process = require("process");
    }
}
var configuration = {
    FacebookAppId: "775514852467101",
    Twitter: {
        consumerKey: "4jtgZPwRFMtCXXjuWadM2MqNC",
        consumerSecret: "3BWXE5somBM2AZAjNDA1t2m4IEc5fxLoH25xwCXLqHGjgN9qdS"
    }
};
switch (process.env.NODE_ENV) {
    case "production":
        configuration.SharingUrl = "http://poseapi.cloudvireo.com/";
        break;
    default:
        configuration.SharingUrl = "http://poseapi.cloudvireo.com/"; //"https://localhost:44317/";
        break;
}
exports.config = configuration;
exports.default = configuration;
