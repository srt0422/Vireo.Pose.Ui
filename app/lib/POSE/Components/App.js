import * as React from "react";
import "../Authentication/authenticationManager";
import renderer from "./AppRenderer/renderer";
export default class App extends React.Component {
    render() {
        return renderer.call(this);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
}
