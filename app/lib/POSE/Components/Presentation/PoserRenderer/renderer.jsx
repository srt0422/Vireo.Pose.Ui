"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const SharingContentComponent = require("../SharingContentComponent");
const styles = require("../../styles");
function render(props, state) {
    return (<form className={`${styles["center-block"]} ${styles.clearfix} ${styles['sharing-component']}`}>
        <SharingContentComponent type={this.state.type} value={this.contentMap[this.state.value]} label={this.labelMap[this.state.value]} onChange={(e) => this.typeChanged({
        value: e.target.innerText,
        type: this.typeMap[e.target.innerText]
    })} onContentChange={(val) => this.postValue = val} wrapperClass="form-group"/>

        <button onClick={this.onClick} className={`${styles.btn} ${styles["btn-lg"]} ${styles["btn-success"]} ${styles["btn-block"]}`} value="Share" type="button" children="Share"/>

    </form>);
}
exports.render = render;
exports.default = render;
