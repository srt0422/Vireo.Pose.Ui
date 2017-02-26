"use strict";
const FacebookSdk_1 = require("../Presentation/SocialMedia/Facebook/FacebookSdk");
const BootstrapContainerLayout_1 = require("../../../HTML/Components/BootstrapContainerLayout");
module.exports = function (props) {
    return (<div>
        <FacebookSdk_1.default appId="764673526884567"></FacebookSdk_1.default>

        <BootstrapContainerLayout_1.default>
            {props.children}
        </BootstrapContainerLayout_1.default>
    </div>);
};
