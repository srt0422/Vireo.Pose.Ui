"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styles = require("../../../styles");
function render() {
    return (<button onClick={this.onSelected} type="button" className={styles["list-group-item"] + " "
        + (this.state.selected
            ? styles["list-group-item-danger"]
            : "")}>

              {this.props.label}

          </button>);
}
exports.render = render;
exports.default = render;
