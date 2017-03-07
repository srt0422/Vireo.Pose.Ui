"use strict";
const React = require("react");
const native_base_1 = require("native-base");
const FacebookSdk = require("../Presentation/SocialMedia/Facebook/FacebookSdk");
const Poser_1 = require("../Presentation/Poser");
module.exports = function (props) {
    return (<native_base_1.Container>
        <FacebookSdk appId="764673526884567"></FacebookSdk>
        
        <native_base_1.Header>
            <native_base_1.Title>POSE</native_base_1.Title>
        </native_base_1.Header>
        <native_base_1.Content>
            <Poser_1.default></Poser_1.default>
            
        </native_base_1.Content>
    </native_base_1.Container>);
};
//# sourceMappingURL=renderer.ios.jsx.map