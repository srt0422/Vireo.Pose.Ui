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
export var config = {
    FacebookAppId: "775514852467101",
    Twitter: {
        consumerKey: "4jtgZPwRFMtCXXjuWadM2MqNC",
        consumerSecret: "3BWXE5somBM2AZAjNDA1t2m4IEc5fxLoH25xwCXLqHGjgN9qdS"
    }
};
;
switch (process.env.NODE_ENV) {
    case "production":
        config.SharingUrl = "https://poseapi.cloudvireo.com/";
        break;
    default:
        config.SharingUrl = "https://localhost:44317/";
        break;
}
export default config;
