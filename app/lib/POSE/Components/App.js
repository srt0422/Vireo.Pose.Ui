import * as React from "react";
import { connect } from "react-redux";
import "../Authentication/authenticationManager";
import Store from "../Flux/Store";
let store = Store; // set a variable that can be tested with rewire (ref: ../../../../__tests__/web/unit/AppComponentTests.web.tsx)
import renderer from "./AppRenderer/renderer";
export class App extends React.Component {
    constructor() {
        super(...arguments);
        this.Store = store;
        // public handleDeepLink(e) {
        //   const route = e.url.replace(/.*?:\/\//g, "");
        //   this._navigator.replace(this.state.routes[route]);
        // }
    }
    render() {
        return renderer.call(this);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
}
export default connect((store) => {
    if (store) {
        return { loading: store.Loading };
    }
    return { loading: false };
})(App);
