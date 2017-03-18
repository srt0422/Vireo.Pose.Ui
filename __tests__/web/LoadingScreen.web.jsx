// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import "mocha";
import { assert } from "chai";
import { shallow } from 'enzyme';
import * as React from "react";
import LoadingScreen from "../app/lib/POSE/Components/Presentation/LoadingScreen";
describe("Loading Screen Test Suite", () => {
    let testLoadingScreen = null;
    beforeEach(() => {
        testLoadingScreen = shallow(<LoadingScreen />);
    });
    afterEach(() => {
        testLoadingScreen = null;
    });
    it("Should not be loading", () => {
        assert.strictEqual(testLoadingScreen.props.loading, false);
    });
    it("Should be loading", () => {
        assert.strictEqual(testLoadingScreen.props.loading, true);
    });
});
//# sourceMappingURL=LoadingScreen.web.jsx.map