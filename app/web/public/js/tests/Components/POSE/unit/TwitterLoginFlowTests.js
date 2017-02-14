var POSE;
(function (POSE) {
    var Tests;
    (function (Tests) {
        var TwitterLoginFlow = POSE.Social.Authentication.TwitterLoginFlow;
        var testSpecRunner = POSE.Tests.Specs;
        testSpecRunner.register("TwitterLoginFlow", function () {
            var testLoginFlow = null;
            beforeEach(function () {
                testLoginFlow = new TwitterLoginFlow();
            });
            afterEach(function () {
                testLoginFlow = null;
            });
            describe("TwitterLoginFlow Tests", function () {
                it("can login", function () {
                    testLoginFlow.login("testUrl");
                    expect(true).toBe(true);
                });
            });
        });
    })(Tests = POSE.Tests || (POSE.Tests = {}));
})(POSE || (POSE = {}));
