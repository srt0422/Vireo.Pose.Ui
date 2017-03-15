var POSE;
(function (POSE) {
    var Tests;
    (function (Tests) {
        var testLoginFlow = null;
        beforeEach(() => {
        });
        afterEach(() => {
            testLoginFlow = null;
        });
        describe("TwitterLoginFlow Tests", function () {
            it("can login", function () {
                testLoginFlow.login("testUrl");
                expect(true).toBe(true);
            });
        });
    })(Tests = POSE.Tests || (POSE.Tests = {}));
})(POSE || (POSE = {}));
//# sourceMappingURL=TwitterLoginFlowTests.js.map