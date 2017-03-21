//module POSE.Html {
import * as React from "react";

export default class BootstrapContainerLayout extends React.Component<any, any>{
    public render() {
        return (
            <div className={this.props.styles.container}>
                <div className={this.props.styles.row}>
                    <div className={this.props.styles["col-sm-12"]}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

//export = BootstrapContainerLayout;
//}