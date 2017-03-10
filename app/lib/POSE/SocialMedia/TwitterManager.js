var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as firebaseImport from "firebase";
//const twitterLoginHelper: ITwitterLoginHelper = new TwitterLoginHelper();
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
            console.log(result);
            accessInfo.accessToken = result.credential.accessToken;
            accessInfo.userID = result.user.uid;
            accessInfo.secret = result.credential.secret;
            //var token = result.credential.accessToken;
            //var secret = result.credential.secret;
            //var userId = result.user.uid;
        }
        catch (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            throw errorMessage;
        }
        //await authManager.signInToTwitter()
        //                 .then(() => console.log(arguments));
        // return new Promise<any>((fullfill, reject) => {
        //
        //     try {
        //         if (twitterLoginHelper.getOAuthToken() == null) {
        //             twitterLoginHelper.login("addTwitterSharingProvider");
        //         }
        //     }
        //     catch (e) { reject(e); }
        //
        //     fullfill();
        // });
    });
}
