// try authenticaiton using: https://api.twitter.com/oauth/authenticate

import React = require("react");
import SocialMediaAuthentiationBase = require("../SocialMediaAuthentiationWrapper");
import ISocialAuthenticationProps = require("../Interfaces/ISocialAuthenticationProps");
import SocialProviders from "../../../SocialProviders";

export default class TwitterAuthentication extends React.Component<ISocialAuthenticationProps, any> {

    render() {
        if (!this.props.shouldAuthenticate()) {
            return null;
        }

        return (
            <SocialMediaAuthentiationBase setAuthCallback={()=> {throw "setAuthCallback not implemented";}}
                                          shouldAuthenticate={this.props.shouldAuthenticate}
                                          sharingProvider={SocialProviders.Twitter}>
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input type="text" className="form-control" id="username" placeholder="User Name"/>
                    </div>
                    <button onClick={this.onClick} type="submit" className="btn btn-default">Login</button>
                </form>
            </SocialMediaAuthentiationBase>
        );
    }

    onClick(el) {
        el.value
    }
}
