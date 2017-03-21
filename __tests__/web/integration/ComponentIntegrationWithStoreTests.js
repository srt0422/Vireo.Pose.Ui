import "mocha";
import { assert } from "chai";
import { shallow } from 'enzyme';
import * as React from "react";
import Store from "../../../app/lib/POSE/Flux/Store";
import App from "../../../app/lib/POSE/Components/App";
describe("Component integration with flux store tests", () => {
    let testAppComponent = null;
    beforeEach(() => {
    });
    afterEach(() => {
        testAppComponent = null;
        Store.Loading = false;
    });
    it("should show loader", () => {
        testAppComponent = shallow(<App />);
        assert.strictEqual(testAppComponent.find("LoadingScreen").length, 0);
        Store.Loading = false;
        assert.strictEqual(testAppComponent.find("LoadingScreen").length, 0);
    });
    it("should not show loader", () => {
        Store.Loading = true;
        testAppComponent = shallow(<App />);
        assert.strictEqual(testAppComponent.find("LoadingScreen").length, 1);
    });
});
//# sourceMappingURL=ComponentIntegrationWithStoreTests.jsx.map