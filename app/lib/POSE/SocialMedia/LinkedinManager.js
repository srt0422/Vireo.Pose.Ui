var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let authInfo;
export function fillSharingProviderWithAuthInfo(sharingProvider) {
    sharingProvider.setAuthToken(authInfo.accessToken);
}
export function ensureLoggedIn() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((fullfill, reject) => {
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
    });
}
