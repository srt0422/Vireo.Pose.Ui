var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Provider } from "mobx-react";
import { observer } from "mobx";
import "../Authentication/authenticationManager";
import Store from "../Flux/Store";
import renderer from "./AppRenderer/renderer";
let store = Store; // set a variable that can be tested with rewire (ref: ../../../../__tests__/web/unit/AppComponentTests.web.tsx)
let App = class App extends React.Component {
    constructor() {
        super(...arguments);
        this.Store = Store;
        // public handleDeepLink(e) {
        //   const route = e.url.replace(/.*?:\/\//g, "");
        //   this._navigator.replace(this.state.routes[route]);
        // }
    }
    render() {
        return (<Provider store={store}>
                {renderer.call(this)}
            </Provider>);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
};
App = __decorate([
    observer
], App);
export default App;
