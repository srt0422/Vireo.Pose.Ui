
import * as authManager from "../Authentication/authenticationManager";

//const twitterLoginHelper: ITwitterLoginHelper = new TwitterLoginHelper();

let accessInfo: any = {};

export function fillSharingProviderWithAuthInfo(sharingProvider) {

    sharingProvider.setAuthToken(
        //authManager.getOAuthToken()
    );
}

export async function ensureLoggedIn() {

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
