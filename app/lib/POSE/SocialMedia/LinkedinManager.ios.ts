import * as LinkedInSDK from 'react-native-linkedin-sdk';

import SharingProviderModel = require("../Flux/SharingProviderModel");

let accessInfo: any = {};

export function fillSharingProviderWithAuthInfo(sharingProvider: SharingProviderModel) {

    sharingProvider.setAuthToken(accessInfo.accessToken);
}

export async function ensureLoggedIn() {

    return await LinkedInSDK.signIn({
        // https://developer.linkedin.com/docs/oauth2

        // iOS (Required)
        // The "API Key" value generated when you registered your application.
        clientID: '75v5vlraic1sa6',

        // iOS (Required)
        clientSecret: 'eyPrqqzvpumBjjF8',

        // iOS (Required)
        // A unique string value of your choice that is hard to guess. Used to prevent CSRF.
        state: 'sadfsrtyuafszcxajhgkjhgkgqerewqrtyiyt',

        // iOS, Android (Required)
        scopes: [
            'r_basicprofile',
            'r_emailaddress',
            'w_share',
        ],

        // iOS (Required)
        // The URI your users will be sent back to after authorization.  This value must match one of the defined OAuth 2.0 Redirect URLs in your application configuration.
        // e.g. https://www.example.com/auth/linkedin
        redirectUri: 'https://www.linkedin.com/uas/connect/user-signin',
    });
}
