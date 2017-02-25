"use strict";
const React = require("react");
const styles = require("../../POSE/styles");
class UnorderedListComponent extends React.Component {
    render() {
        return (<ul className={`${styles["dropdown-menu"]} ${styles["dropdown-menu-right"]}`}>
                    {this.props.types.map((type, i, col) => {
            return (<li onClick={this.props.onItemClick} key={i}>
                                <a>{type}</a>
                            </li>);
        })}
                </ul>);
    }
}
module.exports = UnorderedListComponent;
