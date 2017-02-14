//module POSE {
import React = require("react");

import FacebookSdk = require("./Presentation/SocialMedia/Facebook/FacebookSdk");
import LinkedInSdk = require("./Presentation/SocialMedia/LinkedIn/LinkedInSdk");

import BootstrapContainerLayout from "../../HTML/Components/BootstrapContainerLayout";

export default class App extends React.Component<any, any>{

    public render() {
        return require("./AppRenderer/renderer")(this.props);
    }
}
//}
