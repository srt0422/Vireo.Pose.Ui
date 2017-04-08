import "mocha";
import { assert } from "chai";
import { ShallowWrapper, shallow } from 'enzyme';
import * as React from "react";

import { App } from "../../../app/lib/POSE/Components/App";
import Store from "../../../app/lib/POSE/Flux/Store";

describe("App component Test Suite", () => {

    let testAppComponent: ShallowWrapper<any, any> = null;

    beforeEach(() => {
    });

    afterEach(() => {
        testAppComponent = null;
    });

    it("Should render", () => {
        
        testAppComponent = shallow(<App />);

        assert.strictEqual(testAppComponent.find("FacebookSdk").length, 1);
        assert.strictEqual(testAppComponent.find("BootstrapContainerLayout").length, 1);
        assert.strictEqual(testAppComponent.find("LoadingScreen").length, 0);
    });

    it("Should show loading screen", () => {
        
        testAppComponent = shallow(<App loading={true} />);

        assert.equal(testAppComponent.find("LoadingScreen").length, 1);
    });

    it("Should not show loading screen", () => {

        testAppComponent = shallow(<App loading={false} />);

        assert.equal(testAppComponent.find("LoadingScreen").length, 0);
    });
});