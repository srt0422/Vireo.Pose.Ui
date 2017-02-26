import {LoginManager, FBAccessToken} from "react-native-fbsdk";

let accessToken;

export function fillSharingProviderWithAuthInfo(sharingProvider){

                    sharingProvider.setExpirationDate(response.authResponse.expiresIn);

                    sharingProvider.setUserId(response.authResponse.userID);
                    sharingProvider.setAuthToken(response.authResponse.accessToken);
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
                        .then((accessToken) => {

                            accessToken = accessToken;

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
