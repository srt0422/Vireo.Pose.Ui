"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var enzyme_1 = require("enzyme");
var React = require("react");
var Store_1 = require("../../../app/lib/POSE/Flux/Store");
var App_1 = require("../../../app/lib/POSE/Components/App");
var loadingActions = require("../../../app/lib/POSE/Flux/Actions/LoadingActions");
describe("Component integration with flux store tests", function () {
    var testAppComponent = null;
    beforeEach(function () {
    });
    afterEach(function () {
        testAppComponent = null;
        loadingActions.StopLoading();
    });
    it("should not show loader", function () {
        testAppComponent = enzyme_1.shallow(<App_1.App />);
        chai_1.assert.strictEqual(testAppComponent.find("LoadingScreen").length, 0);
        loadingActions.StopLoading();
        chai_1.assert.strictEqual(testAppComponent.find("LoadingScreen").length, 0);
    });
    it("should show loader", function () {
        loadingActions.StartLoading();
        testAppComponent = enzyme_1.shallow(<App_1.App loading={Store_1.default.getState().Loading}/>);
        chai_1.assert.strictEqual(testAppComponent.find("LoadingScreen").length, 1);
    });
});
