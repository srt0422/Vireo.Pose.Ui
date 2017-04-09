"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SocialMediaOption_1 = require("../SocialMediaOption");
function default_1() {
    return (<div className={"" + this.props.styles["list-group"]}>
            <SocialMediaOption_1.default styles={this.props.styles} value="facebook" label="Facebook"></SocialMediaOption_1.default>
            <SocialMediaOption_1.default styles={this.props.styles} value="twitter" label="Twitter"></SocialMediaOption_1.default>
            <SocialMediaOption_1.default styles={this.props.styles} value="linkedin" label="LinkedIn"></SocialMediaOption_1.default>
        </div>);
}
exports.default = default_1;
