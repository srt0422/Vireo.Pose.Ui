"use strict";
const React = require("react");
const native_base_1 = require("native-base");
const SharingContentComponent = require("../SharingContentComponent");
const SocialMediaSelectorComponent = require("../SocialMediaSelectorComponent");
const SocialOptions = require("../../SocialProviders");
const styles_1 = require("../../../styles");
function render() {
    return (<native_base_1.List style={styles_1.default.poser}>
<native_base_1.ListItem>
            <SharingContentComponent type={this.state.type} value={this.state.value} label={this.labelMap[this.state.value]} onChange={(val) => this.typeChanged({
        value: val,
        type: this.typeMap[val]
    })} onContentChange={(val) => this.postValue = val} wrapperClass="form-group" style={styles_1.default.sharingContentComponent}/>
</native_base_1.ListItem>
<native_base_1.ListItem>
            <SocialMediaSelectorComponent options={SocialOptions}></SocialMediaSelectorComponent>
</native_base_1.ListItem>
<native_base_1.ListItem>
            <native_base_1.Button onPress={this.onClick} styles={styles_1.default.shareButton} title="Share" color="blue"></native_base_1.Button>
</native_base_1.ListItem>
        </native_base_1.List>);
}
exports.render = render;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = render;
