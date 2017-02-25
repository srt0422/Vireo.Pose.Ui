import {Platform} from "react-native";
import IPoseConfiguration from "./IPoseConfiguration";

let process;

if (Platform.OS === "ios" || Platform.OS !== "android") {
    process = {
        env: {
            NODE_ENV: "development"
        }
    };
}
else {
    process = require("process");
}

export var config: IPoseConfiguration = {};

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

export default config;
