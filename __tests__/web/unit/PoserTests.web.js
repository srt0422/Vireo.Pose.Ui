import "mocha";
import { assert } from "chai";
import { shallow } from 'enzyme';
import * as React from "react";
import * as sinon from "sinon";
import rewire from "rewire";
import Poser from "../../../app/lib/POSE/Components/Presentation/Poser";
describe("Poser Test Suite", () => {
    let testPoser = null;
    let rewiredPoser;
    beforeEach(() => {
        rewiredPoser = rewire("../../../app/lib/POSE/Components/Presentation/Poser");
    });
    afterEach(() => {
        testPoser = null;
        rewiredPoser = null;
    });
    it("Should render", () => {
        testPoser = shallow(<Poser styles={{}}/>);
        assert.strictEqual(testPoser.children().length, 3);
    });
    it("Should handle click", () => {
        let postStoreMock = sinon.mock({ setContent: () => { }, save: () => { } });
        let loadingActionsMock = sinon.mock({ StartLoading: () => { }, StopLoading: () => { } });
        let savePromiseMock = sinon.mock({ then: () => { } });
        let savePromiseCatchMock = sinon.mock({ catch: () => { } });
        let revertPostStore = rewiredPoser.__set__("postStore", postStoreMock.object);
        let revertLoadingActions = rewiredPoser.__set__("loadingActions", loadingActionsMock.object);
        let poserInstance = new rewiredPoser.default();
        poserInstance.postValue = "test value";
        postStoreMock.expects("setContent").withArgs("test value");
        postStoreMock.expects("save")
            .once()
            .returns(savePromiseMock.object);
        let expectation = savePromiseMock.expects("then").once().returns(savePromiseCatchMock.object);
        loadingActionsMock.expects("StartLoading").once();
        loadingActionsMock.expects("StopLoading").once();
        poserInstance.onClick();
        expectation.yield();
        postStoreMock.verify();
        loadingActionsMock.verify();
        revertPostStore();
        revertLoadingActions();
    });
});
