"use strict";
const react_native_1 = require("react-native");
// const {Platform} = ReactNative;
let process;
if (react_native_1.Platform.OS === "ios" || react_native_1.Platform.OS !== "android") {
    process = {
        env: {
            NODE_ENV: "development"
        }
    };
}
else {
    process = require("process");
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
