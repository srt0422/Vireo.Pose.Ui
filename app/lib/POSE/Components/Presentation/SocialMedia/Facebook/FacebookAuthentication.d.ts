import AuthBase from "../AuthBase";
declare class FacebookAuthentication extends AuthBase {
    render(): JSX.Element;
    componentDidMount(): void;
    ensureLoggedIn(): void;
}
export = FacebookAuthentication;
