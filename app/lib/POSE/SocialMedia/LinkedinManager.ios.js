"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedInSDK = require("react-native-linkedin-sdk");
let accessInfo = {};
function fillSharingProviderWithAuthInfo(sharingProvider) {
    sharingProvider.setAuthToken(accessInfo.accessToken);
}
exports.fillSharingProviderWithAuthInfo = fillSharingProviderWithAuthInfo;
function ensureLoggedIn() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield LinkedInSDK.signIn({
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
    });
}
exports.ensureLoggedIn = ensureLoggedIn;
