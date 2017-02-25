"use strict";
const React = require("react");
const SharingInputTypeComponent = require("../SharingInputTypeComponent");
const styles_1 = require("../../../styles");
module.exports = function (props, state) {
    return (<div className={this.props.wrapperClass}>

              <div className={`${styles_1.default["form-group"]}`}>
                  <SharingInputTypeComponent value={this.props.value} types={['Message', 'Link', 'Picture']} onTypeChanged={this.props.onChange}/>
              </div>

              <label className="">{this.props.label}</label>

              <div className={styles_1.default[`form-group`]}>

                  <input onChange={(e) => this.props.onContentChange(e.target.value)} type={this.props.type} className={`${styles_1.default["pose-share-content"]} ${styles_1.default["form-control"]}`} aria-label=""/>

              </div>
          </div>);
};
