// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

///TODO: SETUP WEBPACK IN TESTS DIRECTORY TO BUNDLE AND RUN TESTS WITH WEBPACK AND MOCHA

import "mocha";
import { assert } from "chai";
import { ShallowWrapper, shallow } from 'enzyme';
import * as React from "react";

import LoadingScreen from "../../../app/lib/POSE/Components/Presentation/LoadingScreen";
import Poser from "../../../app/lib/POSE/Components/Presentation/Poser";

describe("Poser Screen Test Suite", () => {

    let testPoser: ShallowWrapper<any, any> = null;

    beforeEach(() => {
    });

    afterEach(() => {
        testPoser = null;
    });

    it("Should render", () => {
        testPoser = shallow(<Poser styles={{}} />);

        assert.strictEqual(testPoser.children().length, 3);
    });

    it("Should handle click", () => {
        testPoser = shallow(<Poser styles={{}} />);

        testPose.instance as Poser;

        assert.strictEqual(testPoser.children().length, 3);
    });
});