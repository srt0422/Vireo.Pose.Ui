"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_fbsdk_1 = require("react-native-fbsdk");
let accessToken;
function fillSharingProviderWithAuthInfo(sharingProvider) {
    sharingProvider.setExpirationDate(response.authResponse.expiresIn);
    sharingProvider.setUserId(response.authResponse.userID);
    sharingProvider.setAuthToken(response.authResponse.accessToken);
}
exports.fillSharingProviderWithAuthInfo = fillSharingProviderWithAuthInfo;
function ensureLoggedIn() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((fullfilled, rejected) => react_native_fbsdk_1.LoginManager.logInWithPublishPermissions(['publish_actions'])
            .then((result) => {
            if (result.isCancelled) {
                rejected("login canceled");
            }
            else {
                react_native_fbsdk_1.FBAccessToken.getCurrentAccessToken()
                    .then((accessToken) => {
                    accessToken = accessToken;
                    fullfilled();
                });
            }
        }, (error) => rejected(error)));
    });
}
exports.ensureLoggedIn = ensureLoggedIn;
