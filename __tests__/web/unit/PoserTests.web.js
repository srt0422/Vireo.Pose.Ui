import "mocha";
import { assert } from "chai";
import { shallow } from 'enzyme';
import * as React from "react";
import Poser from "../../../app/lib/POSE/Components/Presentation/Poser";
describe("Poser Screen Test Suite", () => {
    let testLoadingScreen = null;
    beforeEach(() => {
    });
    afterEach(() => {
        testLoadingScreen = null;
    });
    it("Should not be loading", () => {
        testLoadingScreen = shallow(<Poser />);
        assert.strictEqual(testLoadingScreen.children().length, 0);
    });
    it("Should be loading", () => {
        testLoadingScreen = shallow(<Poser />);
        assert.strictEqual(testLoadingScreen.children.length, 1);
    });
});
//# sourceMappingURL=PoserTests.web.jsx.map