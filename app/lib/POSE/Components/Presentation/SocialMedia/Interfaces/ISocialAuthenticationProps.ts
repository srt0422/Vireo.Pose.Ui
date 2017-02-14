export interface ISocialAuthenticationProps extends __React.Props<any> {
    setAuthCallback: (cb: Function) => void;
    shouldAuthenticate: () => boolean;
    sharingProvider: ISharingProviderModelProps
}
