import * as React from "react";
export function render() {
    const styles = this.props.styles;
    return (<button onClick={this.onSelected} type="button" className={styles["list-group-item"] + " "
        + (this.state.selected
            ? styles["list-group-item-danger"]
            : "")}>

            {this.props.label}
        </button>);
}
export default render;
