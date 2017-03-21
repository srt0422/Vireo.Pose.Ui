import * as React from "react";
import { Provider } from "mobx-react";
import { observer } from "mobx";

import BootstrapContainerLayout from "../../HTML/Components/BootstrapContainerLayout";
import "../Authentication/authenticationManager";
import Store from "../Flux/Store";

import renderer from "./AppRenderer/renderer";

let store = Store; // set a variable that can be tested with rewire (ref: ../../../../__tests__/web/unit/AppComponentTests.web.tsx)

@observer
class App extends React.Component<any, any>{

    public Store = Store;
    public render() {
        return (
            <Provider store={store}>
                {renderer.call(this)}
            </Provider>
        );
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

export default App;