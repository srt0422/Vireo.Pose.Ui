import "mocha";
import { assert } from "chai";
import { shallow } from 'enzyme';
import * as React from "react";
import Poser from "../../../app/lib/POSE/Components/Presentation/Poser";
describe("Poser Screen Test Suite", () => {
    let testPoser = null;
    beforeEach(() => {
    });
    afterEach(() => {
        testPoser = null;
    });
    it("Should render", () => {
        testPoser = shallow(<Poser styles={{}}/>);
        assert.strictEqual(testPoser.children().length, 3);
    });
    it("Should handle click", () => {
        testPoser = shallow(<Poser styles={{}}/>);
        testPose.instance;
        assert.strictEqual(testPoser.children().length, 3);
    });
});
//# sourceMappingURL=PoserTests.web.jsx.map