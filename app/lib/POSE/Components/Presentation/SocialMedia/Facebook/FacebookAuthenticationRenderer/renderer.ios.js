"use strict";
const react_native_fbsdk_1 = require("react-native-fbsdk");
function renderer() {
    react_native_fbsdk_1.LoginManager.logInWithPublishPermissions(['publish_actions']).then((result) => {
        if (result.isCancelled) {
            alert('Login cancelled');
        }
        else {
            alert('Login success with permissions: '
                + result.grantedPermissions.toString());
            alert("Info: " + result);
        }
    }, (error) => {
        alert('Login fail with error: ' + error);
    });
    return null;
}
exports.renderer = renderer;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = renderer;
//# sourceMappingURL=renderer.ios.jsx.map