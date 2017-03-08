//module POSE.Html {
import * as React from "react";
export default class BootstrapContainerLayout extends React.Component {
    render() {
        return (<div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {this.props.children}
                            </div>
                        </div>
                </div>);
    }
}
//export = BootstrapContainerLayout;
//}
