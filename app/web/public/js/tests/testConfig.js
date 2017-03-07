window['module'] = window['module'] || {};
var testConfigPaths = {
    //jasmine: "../../../../../../../Scripts/jasmine/jasmine.js",
    //"jasmine-html": "../../../../../../../Scripts/jasmine/jasmine-html.js",
    //"jasmine-boot":  "../../../../../../../Scripts/jasmine/boot.js",
    underscore: requireConfig.lib + "underscore",
    "react-testutils-additions": "node_modules/react-testutils-additions/index",
    posertests: "tests/components/pose/presentation/PoserTests",
    jasmine_react: "node_modules/jasmine-react/dist/jasmine_react",
    rsvp: "node_modules/jasmine-react/node_modules/rsvp/dist/rsvp",
    lodash: requireConfig.lib + "lodash",
    //"react-addons-test-utils": "node_modules/react-addons-test-utils/index",
    'object-assign': "node_modules/react-testutils-additions/node_modules/object-assign/index",
    'sizzle': "node_modules/react-testutils-additions/node_modules/sizzle/dist/sizzle",
    "react-addons-test-utils": requireConfig.lib + "react/ReactTestUtils"
};
for (var path in testConfigPaths) {
    requireConfig.paths[path] = testConfigPaths[path];
}
//ReactTestUtils
//requireConfig.map.jasmine_react = {};
//requireConfig.map["react-testutils-additions"] = {
//    "ReactTestUtils": "react-addons-test-utils"
//};
requireConfig.shim = requireConfig.shim || {};
requireConfig.shim.underscore = {
    exports: "_"
};
requireConfig.shim["react-testutils-additions"] = {
    deps: [
        'react',
        "react-addons-test-utils",
        'react-dom',
        "sizzle",
        'object-assign'],
    exports: "module.exports"
};
//requireConfig.shim["react-addons-test-utils"] = {
//    //deps: ["ReactTestUtils"],
//    exports: "React.addons.TestUtils"
//};
//requireConfig.shim["React/lib/ReactTestUtils"] = {
//    deps: [
//        "./EventConstants",
//        "./EventPluginHub",
//        "./EventConstants",
//        "./EventPropagators",
//        "./React",
//        "./ReactDOM",
//        "./ReactElement",
//        "./ReactBrowserEventEmitter",
//        "./ReactCompositeComponent",
//        "./ReactInstanceHandles",
//        "./ReactInstanceMap",
//        "./ReactMount",
//        "./ReactUpdates",
//        "./SyntheticEvent",
//        "./Object.assign",
//        "./fbjs/lib/emptyObject",
//        "./findDOMNode",
//        "./fbjs/lib/invariant"
//    ],
//    exports: "module.exports"
//};
//requireConfig.shim["React/lib/EventConstants"] = {
//    deps: [],
//    exports: "module.exports"
//};
//requirejs.config(requireConfig);
//window["rewire"] = require("rewire"); 
//# sourceMappingURL=testConfig.js.map