import * as React from "react";
import IUnorderedListComponentProps from "../Interfaces/IUnorderedListComponentProps";

export class UnorderedListComponent extends React.Component<IUnorderedListComponentProps, any> {
    public render() {
        return (
            <ul className={`${this.props.styles["dropdown-menu"]} ${this.props.styles["dropdown-menu-right"]}`}>
                {this.props.types.map((type, i, col) => {
                    return (
                        <li onClick={this.props.onItemClick} key={i}>
                            <a>{type}</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default UnorderedListComponent;
