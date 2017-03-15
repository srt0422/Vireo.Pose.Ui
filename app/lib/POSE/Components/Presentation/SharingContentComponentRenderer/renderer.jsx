import * as React from "react";
import SharingInputTypeComponent from "../SharingInputTypeComponent";
import styles from "../../../styles";
export function renderer(props, state) {
    return (<div className={this.props.wrapperClass}>

              <div className={`${styles["form-group"]}`}>
                  <SharingInputTypeComponent value={this.props.value} types={['Message', 'Link', 'Picture']} onTypeChanged={this.props.onChange}/>
              </div>

              <label className="">{this.props.label}</label>

              <div className={styles[`form-group`]}>

                  <input onChange={(e) => this.props.onContentChange(e.target.value)} type={this.props.type} className={`${styles["pose-share-content"]} ${styles["form-control"]}`} aria-label=""/>

              </div>
          </div>);
}
;
export default renderer;
