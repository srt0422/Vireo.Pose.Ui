declare var IN;

import SocialProviders from "../Components/SocialProviders";

let authInfo;

export function fillSharingProviderWithAuthInfo(sharingProvider) {

    sharingProvider.setAuthToken(authInfo.accessToken);
}

export async function ensureLoggedIn() {

    return new Promise<any>((fullfill, reject) => {

        try {
            IN.User.authorize((options) => {

                authInfo = { accessToken: IN.ENV.auth.oauth_token };

                fullfill();
            });
        }
        catch (e) {
            reject(e);
        }
    });
}
