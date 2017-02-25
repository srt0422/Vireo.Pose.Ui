
import React = require("react");

import BootstrapContainerLayout from "../../HTML/Components/BootstrapContainerLayout";

export default class App extends React.Component<any, any>{

    public render() {
        return require("./AppRenderer/renderer")(this.props);
    }
}
