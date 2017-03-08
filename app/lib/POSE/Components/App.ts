
import * as React from "react";
import BootstrapContainerLayout from "../../HTML/Components/BootstrapContainerLayout";

import "../Authentication/authenticationManager";
import renderer from "./AppRenderer/renderer";

export default class App extends React.Component<any, any>{

    public render() {
        return renderer.call(this);
    }

    public componentDidMount() {
    }

    public componentWillUnmount() {
    }
    // public handleDeepLink(e) {
    //   const route = e.url.replace(/.*?:\/\//g, "");
    //   this._navigator.replace(this.state.routes[route]);
    // }
}
