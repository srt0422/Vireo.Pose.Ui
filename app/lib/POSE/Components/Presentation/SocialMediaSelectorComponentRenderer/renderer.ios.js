"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const SocialMediaOption_1 = require("../SocialMediaOption");
const native_base_1 = require("native-base");
function render() {
    return (<native_base_1.Card>
    <native_base_1.List>
          <SocialMediaOption_1.default value="facebook" label="Facebook"></SocialMediaOption_1.default>
          <SocialMediaOption_1.default value="linkedin" label="LinkedIn"></SocialMediaOption_1.default>
          <SocialMediaOption_1.default value="twitter" label="Twitter"></SocialMediaOption_1.default>
    </native_base_1.List>

    </native_base_1.Card>);
}
exports.render = render;
exports.default = render;
