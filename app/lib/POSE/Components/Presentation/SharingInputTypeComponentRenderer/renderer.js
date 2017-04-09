"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var UnorderedListComponent_1 = require("../../../../HTML/Components/UnorderedListComponent");
function renderer() {
    var _this = this;
    if (!this.state) {
        this.state = { open: false };
    }
    return (<div className={this.props.styles.dropdown + " " + (this.state.open ? styles.open : "")}>

            <button type="button" className={this.props.styles.btn + " " + this.props.styles["btn-lg"] + " " + this.props.styles["btn-info"] + " " + this.props.styles["dropdown-toggle"] + " " + this.props.styles["btn-block"]} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ref="button" onClick={function () { return _this.setState({ open: !_this.state.open }); }}>

                {this.props.value} <span className={this.props.styles.caret}></span>

            </button>

            <UnorderedListComponent_1.default onItemClick={this.props.onTypeChanged} types={this.props.types} styles={this.props.styles}/>

        </div>);
}
exports.renderer = renderer;
exports.default = renderer;
