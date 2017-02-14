﻿//module POSE.Html {
import React = require("react");

export default class BootstrapContainerLayout extends React.Component<any, any>{
    public render() {
        return (
            <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {this.props.children}
                            </div>
                        </div>
                </div>
        )
    }
}

//export = BootstrapContainerLayout;
//}
