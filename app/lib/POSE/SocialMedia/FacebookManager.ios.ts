import {LoginManager, AccessToken as FBAccessToken} from "react-native-fbsdk";

let accessToken;

export function fillSharingProviderWithAuthInfo(sharingProvider) {

    sharingProvider.setExpirationDate(accessToken.expirationTime);

    sharingProvider.setUserId(accessToken.userID);
    sharingProvider.setAuthToken(accessToken.accessToken);
}

export async function ensureLoggedIn() {

    let refreshResult = await FBAccessToken.refreshCurrentAccessTokenAsync();
    console.log(refreshResult);
    let result = await LoginManager.logInWithPublishPermissions(['publish_actions']);

    if (result.isCancelled) {
        throw "login canceled";
    }
    else {
        accessToken = await FBAccessToken.getCurrentAccessToken();
    }
}
