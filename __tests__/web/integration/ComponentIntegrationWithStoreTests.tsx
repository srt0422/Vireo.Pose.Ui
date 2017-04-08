import "mocha";
import { assert } from "chai";
import { ShallowWrapper, shallow } from 'enzyme';
import * as React from "react";
import { Provider } from "react-redux";
import jsdom from "jsdom";
import Store from "../../../app/lib/POSE/Flux/Store";

import App from "../../../app/lib/POSE/Components/App";
import * as loadingActions from "../../../app/lib/POSE/Flux/Actions/LoadingActions";

describe("Component integration with flux store tests", () => {

    let testAppComponent: ShallowWrapper<any, any> = null;

    beforeEach(() => {
    });

    afterEach(() => {
        testAppComponent = null;
        loadingActions.StopLoading();
    });

    it("should not show loader", () => {

        testAppComponent = shallow(<Provider store={Store}><App /></Provider>);

        assert.strictEqual(testAppComponent.find("LoadingScreen").length, 0);

        loadingActions.StopLoading();

        assert.strictEqual(testAppComponent.find("LoadingScreen").length, 0);
    });

    it("should show loader", () => {
        
        loadingActions.StartLoading();

        testAppComponent = shallow(<App store={Store} loading={Store.getState().Loading} />);

        testAppComponent.render();

        assert.strictEqual(testAppComponent.find("LoadingScreen").length, 1);
    });
});
