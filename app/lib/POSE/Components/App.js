"use strict";
//module POSE {
const React = require("react");
class App extends React.Component {
    render() {
        return require("./AppRenderer/renderer")(this.props);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//}
