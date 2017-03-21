"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const native_base_1 = require("native-base");
const SharingContentComponent_1 = require("../SharingContentComponent");
const SocialMediaSelectorComponent_1 = require("../SocialMediaSelectorComponent");
const SocialOptions = require("../../SocialProviders");
const styles_1 = require("../../../styles");
function render() {
    return (<native_base_1.View>
            <SharingContentComponent_1.default type={this.state.type} value={this.state.value} label={labelMap[this.state.value]} onChange={(val) => this.typeChanged({
        value: val,
        type: this.typeMap[val]
    })} onContentChange={(val) => this.postValue = val} wrapperClass="form-group" style={styles_1.default.sharingContentComponent}/>
            <SocialMediaSelectorComponent_1.default options={SocialOptions}></SocialMediaSelectorComponent_1.default>

            <native_base_1.Button block large success onPress={this.onClick} style={styles_1.default.shareButton} color="blue">
                <native_base_1.Text>Share</native_base_1.Text>
            </native_base_1.Button>
        </native_base_1.View>);
}
exports.render = render;
const labelMap = {
    Message: "Type Message",
    Link: "Copy Link",
    Picture: "Choose Picture"
};
exports.default = render;
//# sourceMappingURL=renderer.ios.jsx.map