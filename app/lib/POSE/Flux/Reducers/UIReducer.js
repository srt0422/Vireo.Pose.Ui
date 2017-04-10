"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ActionNames_1 = require("../ActionNames");
exports.default = function (state, action) {
    if (state === void 0) { state = { Loading: false }; }
    switch (action.type) {
        case ActionNames_1.default.START_LOADING:
            return __assign({}, state, { Loading: true });
        case ActionNames_1.default.STOP_LOADING:
            return __assign({}, state, { Loading: false });
    }
    return state;
};
