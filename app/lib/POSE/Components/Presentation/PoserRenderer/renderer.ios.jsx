"use strict";
const React = require('react');
const native_base_1 = require('native-base');
const SharingContentComponent = require("../SharingContentComponent");
const SocialMediaSelectorComponent = require("../SocialMediaSelectorComponent");
const SocialOptions = require("../../SocialProviders");
const styles_1 = require("../../../styles");
function render() {
    return (<native_base_1.View>
            <SharingContentComponent type={this.state.type} value={this.state.value} label={labelMap[this.state.value]} onChange={(val) => this.typeChanged({
        value: val,
        type: this.typeMap[val]
    })} onContentChange={(val) => this.postValue = val} wrapperClass="form-group" style={styles_1.default.sharingContentComponent}/>
            <SocialMediaSelectorComponent options={SocialOptions}></SocialMediaSelectorComponent>

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = render;
//
// return (
//   <View className={`${styles["center-block"]} ${styles.clearfix} ${styles['sharing-component']}`} style={formStyle}>
//     <SharingContentComponent
//         type={this.state.type}
//         value={this.contentMap[this.state.value]}
//         label={this.labelMap[this.state.value]}
//         onChange={this.typeChanged}
//         onContentChange={(val) => this.postValue = val}
//         wrapperClass="form-group" />
//
//     <SocialMediaSelectorComponent options={SocialOptions}></SocialMediaSelectorComponent>
//
//     <button
//         onClick={this.onClick}
//         className={`${styles.btn} ${styles["btn-lg"]} ${styles["btn-success"]} ${styles["btn-block"]}`}
//         value="Share"
//         type="button"
//         children="Share" />
//
// </form>
// );
//# sourceMappingURL=renderer.ios.jsx.map