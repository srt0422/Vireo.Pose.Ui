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
        return new Promise((fullfilled, rejected) => LoginManager.logInWithPublishPermissions(['publish_actions'])
            .then((result) => {
            if (result.isCancelled) {
                rejected("login canceled");
            }
            else {
                FBAccessToken.getCurrentAccessToken()
                    .then((result) => {
                    accessToken = result;
                    fullfilled();
                });
            }
        }, (error) => rejected(error)));
    });
}
//# sourceMappingURL=FacebookManager.ios.js.map