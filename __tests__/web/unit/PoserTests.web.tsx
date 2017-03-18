// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

///TODO: SETUP WEBPACK IN TESTS DIRECTORY TO BUNDLE AND RUN TESTS WITH WEBPACK AND MOCHA

import "mocha";
import { assert } from "chai";
import { ShallowWrapper, shallow } from 'enzyme';
import * as React from "react";

import Poser from "../../../app/lib/POSE/Components/Presentation/Poser";

describe("Poser Screen Test Suite", () => {

    let testLoadingScreen: ShallowWrapper<any, any> = null;

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