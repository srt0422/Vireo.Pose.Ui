import "mocha";
import { assert } from "chai";
import { shallow } from 'enzyme';
import * as React from "react";
import Store from "../../../app/lib/POSE/Flux/Store";
import { App } from "../../../app/lib/POSE/Components/App";
import * as loadingActions from "../../../app/lib/POSE/Flux/Actions/LoadingActions";
describe("Component integration with flux store tests", () => {
    let testAppComponent = null;
    beforeEach(() => {
    });
    afterEach(() => {
        testAppComponent = null;
        loadingActions.StopLoading();
    });
    it("should not show loader", () => {
        testAppComponent = shallow(<App loading={Store.getState().uiReducer.Loading}/>);
        assert.strictEqual(testAppComponent.find("LoadingScreen").props().loading, false);
        loadingActions.StopLoading();
        testAppComponent.setState({ loading: Store.getState().uiReducer.Loading });
        assert.strictEqual(testAppComponent.find("LoadingScreen").props().loading, false);
    });
    it("should show loader", () => {
        loadingActions.StartLoading();
        testAppComponent = shallow(<App loading={Store.getState().uiReducer.Loading}/>);
        assert.strictEqual(testAppComponent.find("LoadingScreen").length, 1);
    });
});
