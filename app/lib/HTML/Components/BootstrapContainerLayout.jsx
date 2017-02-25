"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class BootstrapContainerLayout extends React.Component {
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
exports.default = BootstrapContainerLayout;
