import "mocha";
import { assert } from "chai";
import { ShallowWrapper, shallow } from 'enzyme';
import * as React from "react";
import rewire from "rewire";

import App from "../../../app/lib/POSE/Components/App";
import Store from "../../../app/lib/POSE/Flux/Store";

describe("App component Test Suite", () => {

    let testAppComponent: ShallowWrapper<any, any> = null;
    let AppComponent: ()=> React.Component<any, any>;

    let rewiredAppComponent: any;

    beforeEach(() => {
        rewiredAppComponent = rewire("../../../app/lib/POSE/Components/App");
        AppComponent = rewiredAppComponent.default;
    });

    afterEach(() => {
        
        AppComponent = rewiredAppComponent = null;
        testAppComponent = null;
        Store.Loading = false;
    });

    it("Should render", () => {

        testAppComponent = shallow(<App />);

        assert.strictEqual(testAppComponent.children().length, 1);
    });

    it("Should show loading screen", () => {

        Store.Loading = true;

        testAppComponent = shallow(<AppComponent />);

        assert.strictEqual(testAppComponent.find("LoadingScreen").length, 1);
    });

    it("Should not show loading screen", () => {

        testAppComponent = shallow(<AppComponent />);

        assert.strictEqual(testAppComponent.find("LoadingScreen").length, 0);
    });
});