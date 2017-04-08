import OAuthManager from 'react-native-oauth';
import config from "../../../config/config"

let manager:any = {};

manager = manager || new OAuthManager('POSE');

manager.configure({
    twitter: {
        consumer_key: config.Twitter.consumerKey,
        consumer_secret: config.Twitter.consumerKey
    }
 });

export async function signInToTwitter() {
    return await manager.authorize("twitter");
}
