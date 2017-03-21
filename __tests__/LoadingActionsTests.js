import "mocha";
import { assert } from "chai";
import rewire from "rewire";
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
    it("should stop loading", () => {
        loadingActions.StopLoading();
        assert.isFalse(loadingActionsRewired.__get__("store.Loading"));
    });
});
//# sourceMappingURL=LoadingActionsTests.js.map