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
            SharingUrl: "https://pose-web-app.azurewebsites.net/",
            FacebookAppId: "775514852467101",
            Twitter: {
                consumerKey: "4jtgZPwRFMtCXXjuWadM2MqNC",
                consumerSecret: "3BWXE5somBM2AZAjNDA1t2m4IEc5fxLoH25xwCXLqHGjgN9qdS"
            }
        };

        break;
}

export default config;
