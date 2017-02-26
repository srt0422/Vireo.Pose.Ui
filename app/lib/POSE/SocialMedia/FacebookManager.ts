declare var FB;

let authInfo;

export function fillSharingProviderWithAuthInfo(sharingProvider) {

    sharingProvider.setExpirationDate(authInfo.expiresIn);
    sharingProvider.setUserId(authInfo.userID);
    sharingProvider.setAuthToken(authInfo.accessToken);
}

export async function ensureLoggedIn() {

    return new Promise<any>((fullfilled, rejected) =>

        FB.getLoginStatus((response) => {

            if (response.status !== 'connected') {
                FB.login((response) => {

                    authInfo = response.authResponse;

                    fullfilled();
                });
            }
        }));
}
