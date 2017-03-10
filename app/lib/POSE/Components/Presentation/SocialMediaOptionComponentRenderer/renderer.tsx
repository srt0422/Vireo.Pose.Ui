import * as React from "react";
import styles from "../../../styles";

export function render(){
    return (
        <button
            onClick={this.onSelected}
            type="button"
            className={styles["list-group-item"] + " "
                + (this.state.selected
                    ? styles["list-group-item-danger"]
                    : "")}>

            {this.props.label}
        </button>
    );
}

export default render;