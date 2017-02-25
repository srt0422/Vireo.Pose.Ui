"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class App extends React.Component {
    render() {
        return require("./AppRenderer/renderer")(this.props);
    }
}
exports.default = App;
