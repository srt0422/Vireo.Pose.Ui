// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

///TODO: SETUP WEBPACK IN TESTS DIRECTORY TO BUNDLE AND RUN TESTS WITH WEBPACK AND MOCHA

import "mocha";
import { assert } from "chai";
import { ShallowWrapper, shallow } from 'enzyme';
import * as React from "react";
import * as sinon from "sinon";
import rewire, { RewireInterfaces } from "rewire";
import LoadingScreen from "../../../app/lib/POSE/Components/Presentation/LoadingScreen";
import Poser from "../../../app/lib/POSE/Components/Presentation/Poser";

describe("Poser Test Suite", () => {

    let testPoser: ShallowWrapper<any, any> = null;
    let rewiredPoser: any; //RewireInterfaces.RewiredModule;// : { default: () => React.Component<any, any> } ;

    beforeEach(() => {
        rewiredPoser = rewire("../../../app/lib/POSE/Components/Presentation/Poser");
    });

    afterEach(() => {
        testPoser = null;
        rewiredPoser = null;
    });

    it("Should render", () => {
        testPoser = shallow(<Poser styles={{}} />);

        assert.strictEqual(testPoser.children().length, 3);
    });

    it("Should handle click", () => {

        let postStoreMock:any = sinon.mock({ setContent: () => { }, save: () => { } });
        let loadingActionsMock: any = sinon.mock({ StartLoading: () => { }, StopLoading: () => { } });

        let savePromiseMock: any = sinon.mock({ then: () => { } });
        let savePromiseCatchMock: any = sinon.mock({ catch: () => { } });

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