import React = require("react");
declare class SocialAuth extends React.Component<any, any> {
    authenticateFacebook: boolean;
    authenticateTwitter: boolean;
    render(): JSX.Element;
    componentWillMount(): boolean;
}
export = SocialAuth;
