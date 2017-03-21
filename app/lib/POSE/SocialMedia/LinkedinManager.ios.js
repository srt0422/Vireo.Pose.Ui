var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as LinkedInSDK from 'react-native-linkedin-sdk';
let accessInfo = {};
export function fillSharingProviderWithAuthInfo(sharingProvider) {
    sharingProvider.setAuthToken(accessInfo.accessToken);
}
export function ensureLoggedIn() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield LinkedInSDK.signIn({
            clientID: '75v5vlraic1sa6',
            clientSecret: 'eyPrqqzvpumBjjF8',
            state: 'sadfsrtyuafszcxajhgkjhgkgqerewqrtyiyt',
            scopes: [
                'r_basicprofile',
                'r_emailaddress',
                'w_share',
            ],
            redirectUri: 'https://www.linkedin.com/uas/connect/user-signin',
        });
    });
}
//# sourceMappingURL=LinkedinManager.ios.js.map