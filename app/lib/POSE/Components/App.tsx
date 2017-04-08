import * as React from "react";
import { Store as ReduxStore } from "redux";
import { connect } from "react-redux";
import BootstrapContainerLayout from "../../HTML/Components/BootstrapContainerLayout";
import "../Authentication/authenticationManager";

import Store, { Store as StoreType } from "../Flux/Store";

let store = Store; // set a variable that can be tested with rewire (ref: ../../../../__tests__/web/unit/AppComponentTests.web.tsx)

import renderer from "./AppRenderer/renderer";


export class App extends React.Component<any, any>{

    public Store = store;

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

export default connect((store) => {
    if (store) {
        return { loading: store.Loading };
    }

    return { loading: false };
})(App);