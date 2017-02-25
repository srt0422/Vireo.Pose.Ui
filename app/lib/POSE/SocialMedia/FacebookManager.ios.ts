declare var FB;

export async function ensureLoggedIn() {

    return new Promise<any>((fullfilled, rejected) =>

        FB.getLoginStatus((response) => {

            if (response.status !== 'connected') {
                FB.login((response) => fullfilled(response));
            }
        }));
}
