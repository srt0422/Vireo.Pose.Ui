// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

///TODO: SETUP WEBPACK IN TESTS DIRECTORY TO BUNDLE AND RUN TESTS WITH WEBPACK AND MOCHA

import "mocha";
import { assert } from "chai";
import * as sinon from 'sinon';
import * as React from "react";
import * as rewire from "rewire";
import * as loadingActions from "../app/lib/POSE/Flux/Actions/LoadingActions";

describe("LoadingActions Test Suite", () => {

    let loadingActionsRewired;

    beforeEach(() => {
       loadingActionsRewired = rewire("../app/lib/POSE/Flux/Actions/LoadingActions");
    });

    afterEach(() => {
        loadingActionsRewired = null;
    });

    it("should start loading", () => {
        loadingActions.StartLoading();

        assert.isTrue(loadingActionsRewired.__get__("store.Loading"));
    });
});