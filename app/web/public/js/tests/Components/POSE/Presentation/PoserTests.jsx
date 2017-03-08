// import re = require("rewire");
//export class Poser extends React.Component<any, any>{
//    render() {
//        return <POSE.SharingComponent />;
//    }
//}
//
// var mockSharingComponent = React.createClass({
//     render: () => {
//         return <div></div>;
//     }
// });
//
// re.wire("poser", "lib/components/pose/presentation/SharingComponent", () => mockSharingComponent);
//
// require(["poser"], function (poser) {
//
//     var poserFactory: React.DOMFactory<{}>;
//     var sharingComponentRenderSpy: jasmine.Spy;
//
//     describe("poser tests", function () {
//
//         beforeEach(function () {
//             poserFactory = React.createFactory(poser);
//
//             sharingComponentRenderSpy = spyOn(mockSharingComponent.prototype, "render").and.callThrough();
//         });
//
//         afterEach(function () {
//             poser
//         });
//
//         it("should render", function () {
//             var renderedPoser = utils.renderIntoDocument(poserFactory());
//
//             expect(utils.isCompositeComponent(renderedPoser)).toBeTruthy();
//
//             expect(mockSharingComponent.prototype.render).toHaveBeenCalled();
//
//             expect(utils.findRenderedDOMComponentWithTag(renderedPoser, "div")).not.toBeNull();
//
//             //will throw an error if any more or less components are found of this type.
//             expect(utils.findRenderedComponentWithType(renderedPoser, mockSharingComponent)).not.toBeNull();
//         });
//     });
//
//     re.store("poser");
//
//     var jasmineEnv = jasmine.getEnv();
//     jasmineEnv.execute();
// });
