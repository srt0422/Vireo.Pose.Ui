// try authenticaiton using: https://api.twitter.com/oauth/authenticate
"use strict";
const React = require("react");
const SocialMediaAuthentiationBase = require("../SocialMediaAuthentiationWrapper");
const SocialProviders_1 = require("../../../SocialProviders");
class TwitterAuthentication extends React.Component {
    render() {
        if (!this.props.shouldAuthenticate()) {
            return null;
        }
        return (<SocialMediaAuthentiationBase setAuthCallback={() => { throw "setAuthCallback not implemented"; }} shouldAuthenticate={this.props.shouldAuthenticate} sharingProvider={SocialProviders_1.default.Twitter}>
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input type="text" className="form-control" id="username" placeholder="User Name"/>
                    </div>
                    <button onClick={this.onClick} type="submit" className="btn btn-default">Login</button>
                </form>
            </SocialMediaAuthentiationBase>);
    }
    onClick(el) {
        el.value;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TwitterAuthentication;
