import * as React from "react";

import BootstrapContainerLayout from "../../../HTML/Components/BootstrapContainerLayout";
import FacebookSdk from "../Presentation/SocialMedia/Facebook/FacebookSdk";

export function renderer(props) {
    return (
        <div>
            <FacebookSdk appId="764673526884567"></FacebookSdk>

            <BootstrapContainerLayout>
                {props.children}
            </BootstrapContainerLayout>
        </div>
    );
}

export default renderer;