
import * as authManager from "../Authentication/authenticationManager";
import * as firebaseImport from "firebase";
import SharingProviderModel from "../Flux/SharingProviderModel";
//const twitterLoginHelper: ITwitterLoginHelper = new TwitterLoginHelper();

const firebase: any = firebaseImport;

const accessInfo: any = {};

export function fillSharingProviderWithAuthInfo(sharingProvider: SharingProviderModel) {

    sharingProvider.setAuthToken(accessInfo.accessToken);
    sharingProvider.setUserId(accessInfo.userID);
    sharingProvider.setAuthSecret(accessInfo.secret);
}

export async function ensureLoggedIn() {

    let provider = new firebase.auth.TwitterAuthProvider();

    try {

        let result = await firebase.auth().signInWithPopup(provider);

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
}