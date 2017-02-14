import React = require("react");
export default class AuthBase extends React.Component<ISocialAuthenticationProps, any> {
    protected authCallback: (props: ISharingProviderModelProps) => void;
    protected setAuthCallback(cb: any): void;
}
