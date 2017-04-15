import * as React from "react";
import BootstrapContainerLayout from "../../../HTML/Components/BootstrapContainerLayout";
import FacebookSdk from "../Presentation/SocialMedia/Facebook/FacebookSdk";
import Poser from "../Presentation/Poser";
import LoadingScreen from "../Presentation/LoadingScreen";
let styles;
try {
    styles = require("../../styles").default;
}
catch (e) {
    styles = {};
}
const fn = function () {
    return (<div>
                <FacebookSdk appId="764673526884567"></FacebookSdk>

                <BootstrapContainerLayout styles={styles}>
                    {this.props.children || (<Poser styles={styles}></Poser>)}
                </BootstrapContainerLayout>
                <LoadingScreen styles={styles} loading={this.props.loading}/>
            </div>);
};
export var renderer = fn;
export default renderer;
