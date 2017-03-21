import "mocha";
import { assert } from "chai";
import Store from "../app/lib/POSE/Flux/Store";
describe("FluxStore Test Suite", () => {
    let testStore = Store;
    beforeEach(() => {
    });
    afterEach(() => {
        testStore = null;
    });
    it("should not be loading", () => {
        assert.isFalse(Store.Loading);
    });
});
//# sourceMappingURL=FluxStoreTests.js.map