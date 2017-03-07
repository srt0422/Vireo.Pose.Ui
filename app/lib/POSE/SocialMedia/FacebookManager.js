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
let authInfo;
function fillSharingProviderWithAuthInfo(sharingProvider) {
    sharingProvider.setExpirationDate(authInfo.expiresIn);
    sharingProvider.setUserId(authInfo.userID);
    sharingProvider.setAuthToken(authInfo.accessToken);
}
exports.fillSharingProviderWithAuthInfo = fillSharingProviderWithAuthInfo;
function ensureLoggedIn() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((fullfilled, rejected) => FB.getLoginStatus((response) => {
            if (response.status !== 'connected') {
                FB.login((response) => {
                    authInfo = response.authResponse;
                    fullfilled();
                });
            }
        }));
    });
}
exports.ensureLoggedIn = ensureLoggedIn;
