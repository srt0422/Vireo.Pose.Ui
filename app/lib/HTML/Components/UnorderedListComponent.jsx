import * as React from "react";
import styles from "../../POSE/styles";
export class UnorderedListComponent extends React.Component {
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
export default UnorderedListComponent;
