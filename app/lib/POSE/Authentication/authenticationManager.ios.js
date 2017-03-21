var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import OAuthManager from 'react-native-oauth';
import config from "../../../config/config";
let manager = {};
manager = manager || new OAuthManager('POSE');
manager.configure({
    twitter: {
        consumer_key: config.Twitter.consumerKey,
        consumer_secret: config.Twitter.consumerKey
    }
});
export function signInToTwitter() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield manager.authorize("twitter");
    });
}
//# sourceMappingURL=authenticationManager.ios.js.map