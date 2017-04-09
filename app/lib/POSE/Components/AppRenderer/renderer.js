"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BootstrapContainerLayout_1 = require("../../../HTML/Components/BootstrapContainerLayout");
var FacebookSdk_1 = require("../Presentation/SocialMedia/Facebook/FacebookSdk");
var Poser_1 = require("../Presentation/Poser");
var LoadingScreen_1 = require("../Presentation/LoadingScreen");
var styles;
try {
    styles = require("../../styles").default;
}
catch (e) {
    styles = {};
}
var fn = function () {
    return (<div>
                <FacebookSdk_1.default appId="764673526884567"></FacebookSdk_1.default>

                <BootstrapContainerLayout_1.default styles={styles}>
                    {this.props.children || (<Poser_1.default styles={styles}></Poser_1.default>)}
                </BootstrapContainerLayout_1.default>
                <LoadingScreen_1.default styles={styles} loading={this.props.loading}/>
            </div>);
};
exports.renderer = fn;
exports.default = exports.renderer;
