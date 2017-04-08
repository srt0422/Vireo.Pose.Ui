// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

///TODO: SETUP WEBPACK IN TESTS DIRECTORY TO BUNDLE AND RUN TESTS WITH WEBPACK AND MOCHA

import "mocha";
import { assert } from "chai";
import { SinonMock, mock } from 'sinon';
import * as React from "react";
import rewire, { RewireInterfaces } from "rewire";
import * as loadingActions from "../../../app/lib/POSE/Flux/Actions/LoadingActions";
import actionNames from "../../../app/lib/POSE/Flux/ActionNames";

describe("LoadingActions Test Suite", () => {

    let loadingActionsRewired;
    let storeMock: SinonMock;
    let store;
    let storeReset: () => void;

    beforeEach(() => {

        //storeMock = mock() as any;

        loadingActionsRewired = rewire("../../../app/lib/POSE/Flux/Actions/LoadingActions");

        store = loadingActionsRewired.__get__("store");

        storeMock = mock(store);
    });

    afterEach(() => {

        if (storeReset) {
            storeReset();
        }

        storeMock.restore();

        loadingActionsRewired = null;
        storeMock = null;
        storeReset = null;

    });

    it("should start loading", () => {
        storeMock.expects("dispatch").once().withExactArgs({ type: actionNames.START_LOADING });

        loadingActions.StartLoading();

        storeMock.verify();
    });

    it("should stop loading", () => {

        storeMock.expects("dispatch").once().withExactArgs({ type: actionNames.STOP_LOADING });

        loadingActions.StopLoading();

        storeMock.verify();

    });
});