"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function render() {
    var styles = this.props.styles;
    return (<button onClick={this.onSelected} type="button" className={styles["list-group-item"] + " "
        + (this.state.selected
            ? styles["list-group-item-danger"]
            : "")}>

            {this.props.label}
        </button>);
}
exports.render = render;
exports.default = render;
