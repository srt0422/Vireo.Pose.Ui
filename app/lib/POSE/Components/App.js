import * as React from "react";
import { connect } from "react-redux";
import "../Authentication/authenticationManager";
import Store from "../Flux/Store";
let store = Store;
import renderer from "./AppRenderer/renderer";
export class App extends React.Component {
    constructor() {
        super(...arguments);
        this.Store = store;
    }
    render() {
        return renderer.call(this);
    }
}
export default connect((store) => {
    if (store && store.uiReducer) {
        return { loading: store.uiReducer.Loading };
    }
    return { loading: false };
})(App);
