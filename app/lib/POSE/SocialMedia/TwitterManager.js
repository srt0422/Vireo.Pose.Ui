var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as firebaseImport from "firebase";
const firebase = firebaseImport;
const accessInfo = {};
export function fillSharingProviderWithAuthInfo(sharingProvider) {
    sharingProvider.setAuthToken(accessInfo.accessToken);
    sharingProvider.setUserId(accessInfo.userID);
    sharingProvider.setAuthSecret(accessInfo.secret);
}
export function ensureLoggedIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let provider = new firebase.auth.TwitterAuthProvider();
        try {
            let result = yield firebase.auth().signInWithPopup(provider);
            accessInfo.accessToken = result.credential.accessToken;
            accessInfo.userID = result.user.uid;
            accessInfo.secret = result.credential.secret;
        }
        catch (error) {
            throw error;
        }
    });
}
