"use strict";
const React = require("react");
const BootstrapContainerLayout_1 = require("../../../HTML/Components/BootstrapContainerLayout");
const FacebookSdk_1 = require("../Presentation/SocialMedia/Facebook/FacebookSdk");
function renderer(props) {
    return (<div>
            <FacebookSdk_1.default appId="764673526884567"></FacebookSdk_1.default>

            <BootstrapContainerLayout_1.default>
                {props.children}
            </BootstrapContainerLayout_1.default>
        </div>);
}
exports.renderer = renderer;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = renderer;
//# sourceMappingURL=renderer.jsx.map