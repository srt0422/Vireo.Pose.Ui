"use strict";
var Store_1 = require("../Store");
//use variable declaration to make rewire work in unit tests
var store = Store_1.default;
function StartLoading() {
    store.Loading = true;
}
exports.StartLoading = StartLoading;
//# sourceMappingURL=LoadingActions.js.map