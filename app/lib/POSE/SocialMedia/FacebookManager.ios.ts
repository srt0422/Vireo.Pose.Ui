import {LoginManager, AccessToken as FBAccessToken} from "react-native-fbsdk";

let accessToken;

export function fillSharingProviderWithAuthInfo(sharingProvider) {

    sharingProvider.setExpirationDate(accessToken.expirationTime);

    sharingProvider.setUserId(accessToken.userID);
    sharingProvider.setAuthToken(accessToken.accessToken);
}

export async function ensureLoggedIn() {

    return new Promise<any>((fullfilled, rejected) =>

        LoginManager.logInWithPublishPermissions(['publish_actions'])
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

            },
            (error) => rejected(error)));
}
// declinedPermissions
// :
// Array[0]
// grantedPermissions
// :
// Array[1]
// isCancelled
// :
// false
