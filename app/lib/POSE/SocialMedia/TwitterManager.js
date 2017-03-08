var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//const twitterLoginHelper: ITwitterLoginHelper = new TwitterLoginHelper();
let accessInfo = {};
export function fillSharingProviderWithAuthInfo(sharingProvider) {
    sharingProvider.setAuthToken();
}
export function ensureLoggedIn() {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
