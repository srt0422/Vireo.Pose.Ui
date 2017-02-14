"use strict";
const React = require("react");
const ReactNative = require("react-native");
const SharingContentComponent = require("../SharingContentComponent");
const SocialMediaSelectorComponent = require("../SocialMediaSelectorComponent");
const SocialOptions = require("../../SocialProviders");
const { View, Text, Button } = ReactNative;
const styles_1 = require("../../../styles");
function render() {
    return (<View style={styles_1.default.poser}>

            <SharingContentComponent type={this.state.type} value={this.state.value} label={this.labelMap[this.state.value]} onChange={(val) => this.typeChanged({
        value: val,
        type: this.typeMap[val]
    })} onContentChange={(val) => this.postValue = val} wrapperClass="form-group" style={styles_1.default.sharingContentComponent}/>

            <SocialMediaSelectorComponent options={SocialOptions}></SocialMediaSelectorComponent>

            <Button onPress={this.onClick} styles={styles_1.default.shareButton} title="Share" color="blue"></Button>
        </View>);
}
exports.render = render;
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
