
import React = require("react");
import BootstrapContainerLayout from "../../HTML/Components/BootstrapContainerLayout";

import "../Authentication/authenticationManager";

export default class App extends React.Component<any, any>{

    public render() {
        return require("./AppRenderer/renderer")(this.props);
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
