"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("../Authentication/authenticationManager");
class App extends React.Component {
    render() {
        return require("./AppRenderer/renderer")(this.props);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
}
exports.default = App;
