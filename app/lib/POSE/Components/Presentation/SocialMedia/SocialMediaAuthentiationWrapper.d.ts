import React = require("react");

declare class SocialMediaAuthentiationWrapper extends React.Component<ISocialAuthenticationProps, any> {
    private static defaultProps;
    constructor();
    render(): JSX.Element;
    authCallback(): void;
}
export = SocialMediaAuthentiationWrapper;
