"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SharingContentComponent_1 = require("../SharingContentComponent");
var SocialMediaSelectorComponent_1 = require("../SocialMediaSelectorComponent");
var SocialProviders_1 = require("../../SocialProviders");
function render(props, state) {
    var _this = this;
    return (<form className={this.props.styles["center-block"] + " " + this.props.styles.clearfix + " " + this.props.styles.sharingComponent}>

            <SharingContentComponent_1.default type={this.state.type} value={this.contentMap[this.state.value]} label={this.labelMap[this.state.value]} onChange={function (e) { return _this.typeChanged({
        value: e.target.innerText,
        type: _this.typeMap[e.target.innerText]
    }); }} onContentChange={function (val) { return _this.postValue = val; }} wrapperClass="form-group" styles={this.props.styles}/>

            <SocialMediaSelectorComponent_1.default styles={this.props.styles} options={SocialProviders_1.default}></SocialMediaSelectorComponent_1.default>

            <button onClick={this.onClick} className={this.props.styles.btn + " " + this.props.styles["btn-lg"] + " " + this.props.styles["btn-success"] + " " + this.props.styles["btn-block"]} value="Share" type="button" children="Share"/>

        </form>);
}
exports.render = render;
exports.default = render;
