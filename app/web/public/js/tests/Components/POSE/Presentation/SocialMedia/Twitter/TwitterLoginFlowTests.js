/// <reference path="../../../../../../../../../../../scripts/typings/jasmine/jasmine.d.ts" />
var POSE;
(function (POSE) {
    var Tests;
    (function (Tests) {
        //import TwitterLoginFlow = require("");// POSE.Social.Authentication.TwitterLoginFlow;
        //import testSpecRunner = POSE.Tests.Specs;
        //testSpecRunner.register("TwitterLoginFlow", function () {
        var testLoginFlow = null;
        beforeEach(() => {
            //testLoginFlow = new TwitterLoginFlow();
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