"use strict";
const React = require("react");
const UnorderedListComponent = require("../../../../HTML/Components/UnorderedListComponent");
const styles_1 = require("../../../styles");
module.exports = function () {
    return (<div className={`${styles_1.default.dropdown}`}>

                  <button type="button" className={`${styles_1.default.btn} ${styles_1.default["btn-lg"]} ${styles_1.default["btn-info"]} ${styles_1.default["dropdown-toggle"]} ${styles_1.default["btn-block"]}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ref="button">

                      {this.props.value} <span className={styles_1.default.caret}></span>

                      </button>

                  <UnorderedListComponent onItemClick={this.props.onTypeChanged} types={this.props.types}/>

              </div>);
};
//# sourceMappingURL=renderer.jsx.map