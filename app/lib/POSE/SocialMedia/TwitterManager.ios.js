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
const react_native_twitter_1 = require("react-native-twitter");
let accessInfo = {};
function fillSharingProviderWithAuthInfo(sharingProvider) {
    sharingProvider.setAuthToken(accessInfo.accessToken);
    sharingProvider.setUserId(accessInfo.userId);
}
exports.fillSharingProviderWithAuthInfo = fillSharingProviderWithAuthInfo;
function ensureLoggedIn() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((fullfill, reject) => {
            try {
                react_native_twitter_1.auth({
                    consumerKey: "4jtgZPwRFMtCXXjuWadM2MqNC",
                    consumerSecret: "3BWXE5somBM2AZAjNDA1t2m4IEc5fxLoH25xwCXLqHGjgN9qdS"
                }, "deeplink://home")
                    .then(() => {
                    console.log(arguments);
                    fullfill(Object.assign({}, arguments));
                    // accessToken, accessTokenSecret, id, name
                    // accessInfo.accessToken = accessToken;
                    // accessInfo.userId = id;
                });
            }
            catch (e) {
                reject(e);
            }
        });
    });
}
exports.ensureLoggedIn = ensureLoggedIn;
