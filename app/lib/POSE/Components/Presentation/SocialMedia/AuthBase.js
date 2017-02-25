"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class AuthBase extends React.Component {
    setAuthCallback(cb) {
        this.authCallback = cb;
    }
}
exports.default = AuthBase;
