/// <reference path="../../../../../../../../../../../scripts/typings/jasmine/jasmine.d.ts" />

module POSE.Tests {
    //import TwitterLoginFlow = require("");// POSE.Social.Authentication.TwitterLoginFlow;

    //import testSpecRunner = POSE.Tests.Specs;

    //testSpecRunner.register("TwitterLoginFlow", function () {

    var testLoginFlow: any = null;

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
    //});
}