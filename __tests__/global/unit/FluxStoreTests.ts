// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

///TODO: SETUP WEBPACK IN TESTS DIRECTORY TO BUNDLE AND RUN TESTS WITH WEBPACK AND MOCHA

import "mocha";
import { assert } from "chai";
import { Store as ReduxStore } from "redux";
import Store, { Store as StoreType } from "../../../app/lib/POSE/Flux/Store";

describe("FluxStore Test Suite", () => {

    let testStore = Store;

    beforeEach(() => {
    });

    afterEach(() => {
        testStore = null;
    });

    it("should not be loading", () => {

        assert.isFalse(Store.getState().uiReducer.Loading);
    });
});