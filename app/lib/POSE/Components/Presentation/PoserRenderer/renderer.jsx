"use strict";
const React = require("react");
const SharingContentComponent = require("../SharingContentComponent");
const styles_1 = require("../../../styles");
function render(props, state) {
    return (<form className={`${styles_1.default["center-block"]} ${styles_1.default.clearfix} ${styles_1.default['sharing-component']}`}>
        <SharingContentComponent type={this.state.type} value={this.contentMap[this.state.value]} label={this.labelMap[this.state.value]} onChange={(e) => this.typeChanged({
        value: e.target.innerText,
        type: this.typeMap[e.target.innerText]
    })} onContentChange={(val) => this.postValue = val} wrapperClass="form-group"/>

        <button onClick={this.onClick} className={`${styles_1.default.btn} ${styles_1.default["btn-lg"]} ${styles_1.default["btn-success"]} ${styles_1.default["btn-block"]}`} value="Share" type="button" children="Share"/>

    </form>);
}
exports.render = render;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = render;
// <SocialMediaSelectorComponent options={SocialOptions}></SocialMediaSelectorComponent>
//# sourceMappingURL=renderer.jsx.map