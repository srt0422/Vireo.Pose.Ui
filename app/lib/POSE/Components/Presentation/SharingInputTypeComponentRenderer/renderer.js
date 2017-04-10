import * as React from "react";
import UnorderedListComponent from "../../../../HTML/Components/UnorderedListComponent";
export function renderer() {
    if (!this.state) {
        this.state = { open: false };
    }
    return (<div className={`${this.props.styles.dropdown} ${this.state.open ? styles.open : ""}`}>

            <button type="button" className={`${this.props.styles.btn} ${this.props.styles["btn-lg"]} ${this.props.styles["btn-info"]} ${this.props.styles["dropdown-toggle"]} ${this.props.styles["btn-block"]}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ref="button" onClick={() => this.setState({ open: !this.state.open })}>

                {this.props.value} <span className={this.props.styles.caret}></span>

            </button>

            <UnorderedListComponent onItemClick={this.props.onTypeChanged} types={this.props.types} styles={this.props.styles}/>

        </div>);
}
export default renderer;
