import * as React from "react";
import UnorderedListComponent from "../../../../HTML/Components/UnorderedListComponent";

import styles from "../../../styles";

export  function renderer(){
  return (
          <div className={`${styles.dropdown}`}>

                  <button type="button"
                      className={`${styles.btn} ${styles["btn-lg"]} ${styles["btn-info"]} ${styles["dropdown-toggle"]} ${styles["btn-block"]}`}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      ref="button">

                      {this.props.value} <span className={styles.caret}></span>

                      </button>

                  <UnorderedListComponent
                      onItemClick={this.props.onTypeChanged}
                      types={this.props.types} />

              </div>
      );
}

export default renderer;
