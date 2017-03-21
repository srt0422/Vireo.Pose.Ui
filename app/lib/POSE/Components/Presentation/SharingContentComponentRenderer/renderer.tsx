import * as React from "react";
import SharingInputTypeComponent from "../SharingInputTypeComponent";

export function renderer(props, state) {
    return (<div className={this.props.wrapperClass}>

              <div className={`${this.props.styles["form-group"]}`}>
                  <SharingInputTypeComponent
                      value={this.props.value}
                      types={['Message', 'Link', 'Picture']}
                      onTypeChanged={this.props.onChange} />
              </div>

              <label className="">{this.props.label}</label>

              <div className={this.props.styles[`form-group`]}>

                  <input
                      onChange={(e: any) => this.props.onContentChange(e.target.value) }
                      type={this.props.type}
                      className={`${this.props.styles["pose-share-content"]} ${this.props.styles["form-control"]}`}
                      aria-label="" />

              </div>
          </div>);
};

export default renderer;