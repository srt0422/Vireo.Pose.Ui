declare function require(moduleName);

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

let config: IPoseConfiguration = {};

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
