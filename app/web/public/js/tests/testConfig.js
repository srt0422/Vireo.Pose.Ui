window['module'] = window['module'] || {};
var testConfigPaths = {
    underscore: requireConfig.lib + "underscore",
    "react-testutils-additions": "node_modules/react-testutils-additions/index",
    posertests: "tests/components/pose/presentation/PoserTests",
    jasmine_react: "node_modules/jasmine-react/dist/jasmine_react",
    rsvp: "node_modules/jasmine-react/node_modules/rsvp/dist/rsvp",
    lodash: requireConfig.lib + "lodash",
    'object-assign': "node_modules/react-testutils-additions/node_modules/object-assign/index",
    'sizzle': "node_modules/react-testutils-additions/node_modules/sizzle/dist/sizzle",
    "react-addons-test-utils": requireConfig.lib + "react/ReactTestUtils"
};
for (var path in testConfigPaths) {
    requireConfig.paths[path] = testConfigPaths[path];
}
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
        'object-assign'
    ],
    exports: "module.exports"
};
//# sourceMappingURL=testConfig.js.map