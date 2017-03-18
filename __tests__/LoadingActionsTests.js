// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
///TODO: SETUP WEBPACK IN TESTS DIRECTORY TO BUNDLE AND RUN TESTS WITH WEBPACK AND MOCHA
require("mocha");
var chai_1 = require("chai");
var rewire = require("rewire");
var loadingActions = require("../app/lib/POSE/Flux/Actions/LoadingActions");
describe("LoadingActions Test Suite", function () {
    var loadingActionsRewired;
    beforeEach(function () {
        loadingActionsRewired = rewire("../app/lib/POSE/Flux/Actions/LoadingActions");
    });
    afterEach(function () {
        loadingActionsRewired = null;
    });
    it("should start loading", function () {
        loadingActions.StartLoading();
        chai_1.assert.isTrue(loadingActionsRewired.__get__("store.Loading"));
    });
});
//# sourceMappingURL=LoadingActionsTests.js.map