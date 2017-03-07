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
const react_native_oauth_1 = require("react-native-oauth");
const config_1 = require("../../../config/config");
let manager;
manager = manager || new react_native_oauth_1.default('POSE');
manager.configure({
    twitter: {
        consumer_key: config_1.default.Twitter.consumerKey,
        consumer_secret: config_1.default.Twitter.consumerKey
    }
});
function signInToTwitter() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield manager.authorize("twitter");
    });
}
exports.signInToTwitter = signInToTwitter;
