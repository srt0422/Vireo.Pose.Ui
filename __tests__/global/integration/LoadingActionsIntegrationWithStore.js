import "mocha";
import { assert } from "chai";
import Store from "../../../app/lib/POSE/Flux/Store";
import * as loadingActions from "../../../app/lib/POSE/Flux/Actions/LoadingActions";
describe("Loading actions integration with flux store tests", () => {
    beforeEach(() => {
    });
    afterEach(() => {
        loadingActions.StopLoading();
    });
    it("should not be loading", () => {
        assert.equal(Store.getState().uiReducer.Loading, false);
        loadingActions.StartLoading();
        loadingActions.StopLoading();
        assert.strictEqual(Store.getState().uiReducer.Loading, false);
    });
    it("should be loading", () => {
        loadingActions.StartLoading();
        assert.strictEqual(Store.getState().uiReducer.Loading, true);
    });
});
