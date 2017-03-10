
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
        
        accessInfo.accessToken = result.credential.accessToken;
        accessInfo.userID = result.user.uid;
        accessInfo.secret = result.credential.secret;
    }
    catch (error) {

        throw error;
    }
}