
import React = require("react");

import renderer from "./AppRenderer/renderer";

export default class App extends React.Component<any, any>{

    public render() {
        return renderer(this.props);
    }
}
