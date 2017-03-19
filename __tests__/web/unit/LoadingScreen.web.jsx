import "mocha";
import { assert } from "chai";
import { shallow } from 'enzyme';
import * as React from "react";
import LoadingScreen from "../../../app/lib/POSE/Components/Presentation/LoadingScreen";
describe("Loading Screen Test Suite", () => {
    let testLoadingScreen = null;
    beforeEach(() => {
    });
    afterEach(() => {
        testLoadingScreen = null;
    });
    it("Should not be loading", () => {
        testLoadingScreen = shallow(<LoadingScreen loading={false}/>);
        assert.strictEqual(testLoadingScreen.children().length, 0);
    });
    it("Should be loading", () => {
        testLoadingScreen = shallow(<LoadingScreen loading={true}/>);
        assert.strictEqual(testLoadingScreen.children.length, 1);
    });
});
//# sourceMappingURL=LoadingScreen.web.jsx.map