"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SharingInputTypeComponent_1 = require("../SharingInputTypeComponent");
function renderer(props, state) {
    var _this = this;
    return (<div className={this.props.wrapperClass}>

              <div className={"" + this.props.styles["form-group"]}>
                  <SharingInputTypeComponent_1.default value={this.props.value} types={['Message', 'Link', 'Picture']} onTypeChanged={this.props.onChange} styles={this.props.styles}/>
              </div>

              <label className="">{this.props.label}</label>

              <div className={this.props.styles["form-group"]}>

                  <input onChange={function (e) { return _this.props.onContentChange(e.target.value); }} type={this.props.type} className={this.props.styles["pose-share-content"] + " " + this.props.styles["form-control"]} aria-label=""/>

              </div>
          </div>);
}
exports.renderer = renderer;
;
exports.default = renderer;
