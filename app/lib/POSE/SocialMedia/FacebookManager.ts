declare var FB;

let authInfo;

export function fillSharingProviderWithAuthInfo(sharingProvider) {

    sharingProvider.setExpirationDate(authInfo.expiresIn);
    sharingProvider.setUserId(authInfo.userID);
    sharingProvider.setAuthToken(authInfo.accessToken);
}

export async function ensureLoggedIn() {

    return await new Promise<any>((fullfill, rejected) =>

        FB.getLoginStatus((response) => {

            if (response.status !== 'connected') {
                FB.login(fullfillLogginPromise.bind(this, fullfill));
            }
            else {
                fullfillLogginPromise(fullfill, response);
            }
        }));
}

function fullfillLogginPromise(fullfill, response) {
    authInfo = response.authResponse;

    fullfill();
}