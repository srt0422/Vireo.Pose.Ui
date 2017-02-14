import React = require("react");
// import AddSharingProviderMutation = require("AddSharingProviderMutation");

class SocialMediaAuthentiationWrapper extends React.Component<ISocialAuthenticationProps, any>
{
    private static defaultProps = {
        shouldAuthenticate: () => true
    };

    constructor() {
        super();
        this.authCallback = this.authCallback.bind(this);
    }

    public render() {
        if (this.props.shouldAuthenticate()) {

            this.props.setAuthCallback(this.authCallback);

            return this.props.children as JSX.Element;
        }
    }

    public authCallback() {
        // this.props.relay.commitUpdate(
        //     new AddSharingProviderMutation()
        // );
    }
}

export = SocialMediaAuthentiationWrapper;
