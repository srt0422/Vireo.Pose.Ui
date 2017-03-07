"use strict";
let Platform, process;
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
                NODE_ENV: "development"
            }
        };
    }
    else {
        process = require("process");
    }
}
let config = {};
switch (process.env.NODE_ENV) {
    case "production":
        break;
    default:
        config = {
            SharingUrl: "http://posewebapp.azurewebservices.net/",
            FacebookAppId: "775514852467101"
        };
        break;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config;
//# sourceMappingURL=config.js.map