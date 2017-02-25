"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
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
exports.config = {};
switch (process.env.NODE_ENV) {
    case "production":
        break;
    default:
        exports.config = {
            SharingUrl: "http://posewebapp.azurewebservices.net/",
            FacebookAppId: "775514852467101"
        };
        break;
}
exports.default = exports.config;
