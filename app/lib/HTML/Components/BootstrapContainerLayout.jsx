//module POSE.Html {
import * as React from "react";
import styles from "../../POSE/styles";
export default class BootstrapContainerLayout extends React.Component {
    render() {
        return (<div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles["col-sm-12"]}>
                        {this.props.children}
                    </div>
                </div>
            </div>);
    }
}
//export = BootstrapContainerLayout;
//} 
