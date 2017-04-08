import "mocha";
import { mock } from 'sinon';
import rewire from "rewire";
import * as loadingActions from "../../../app/lib/POSE/Flux/Actions/LoadingActions";
import actionNames from "../../../app/lib/POSE/Flux/ActionNames";
describe("LoadingActions Test Suite", () => {
    let loadingActionsRewired;
    let storeMock;
    let store;
    let storeReset;
    beforeEach(() => {
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
