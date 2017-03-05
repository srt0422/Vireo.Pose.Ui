import twitter, {auth} from 'react-native-twitter';

let accessInfo: any = {};

export function fillSharingProviderWithAuthInfo(sharingProvider) {

    sharingProvider.setAuthToken(accessInfo.accessToken);
    sharingProvider.setUserId(accessInfo.userId);
}

export async function ensureLoggedIn() {

    return await new Promise<any>((fullfill, reject) => {
        try {
            auth(
                {
                    consumerKey: "4jtgZPwRFMtCXXjuWadM2MqNC",
                    consumerSecret: "3BWXE5somBM2AZAjNDA1t2m4IEc5fxLoH25xwCXLqHGjgN9qdS"
                },
                "deeplink://home"
            )
            .then(() => {

                console.log(arguments);
                fullfill({...arguments});
                // accessToken, accessTokenSecret, id, name
                // accessInfo.accessToken = accessToken;
                // accessInfo.userId = id;
            });
        }
        catch(e) {
            reject(e);
        }
    });
}
