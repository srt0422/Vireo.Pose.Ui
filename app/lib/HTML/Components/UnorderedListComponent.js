"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var UnorderedListComponent = (function (_super) {
    __extends(UnorderedListComponent, _super);
    function UnorderedListComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnorderedListComponent.prototype.render = function () {
        var _this = this;
        return (<ul className={this.props.styles["dropdown-menu"] + " " + this.props.styles["dropdown-menu-right"]}>
                {this.props.types.map(function (type, i, col) {
            return (<li onClick={_this.props.onItemClick} key={i}>
                            <a>{type}</a>
                        </li>);
        })}
            </ul>);
    };
    return UnorderedListComponent;
}(React.Component));
exports.UnorderedListComponent = UnorderedListComponent;
exports.default = UnorderedListComponent;
