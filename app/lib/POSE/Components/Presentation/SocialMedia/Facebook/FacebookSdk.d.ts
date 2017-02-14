import React = require("react");
declare class FacebookSdk extends React.Component<IFacebookSdkProps, any> {
    constructor();
    render(): any;
    componentWillMount(): void;
    onFBLoaded(): void;
    initializeFBSdk(): void;
}
export = FacebookSdk;
