var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LoginManager, AccessToken as FBAccessToken } from "react-native-fbsdk";
let accessToken;
export function fillSharingProviderWithAuthInfo(sharingProvider) {
    sharingProvider.setExpirationDate(accessToken.expirationTime);
    sharingProvider.setUserId(accessToken.userID);
    sharingProvider.setAuthToken(accessToken.accessToken);
}
export function ensureLoggedIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let refreshResult = yield FBAccessToken.refreshCurrentAccessTokenAsync();
        console.log(refreshResult);
        let result = yield LoginManager.logInWithPublishPermissions(['publish_actions']);
        if (result.isCancelled) {
            throw "login canceled";
        }
        else {
            accessToken = yield FBAccessToken.getCurrentAccessToken();
        }
    });
}
