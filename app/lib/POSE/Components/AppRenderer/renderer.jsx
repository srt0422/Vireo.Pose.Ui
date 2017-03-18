import * as React from "react";
import BootstrapContainerLayout from "../../../HTML/Components/BootstrapContainerLayout";
import FacebookSdk from "../Presentation/SocialMedia/Facebook/FacebookSdk";
import Poser from "../Presentation/Poser";
export function renderer() {
    return (<div>
            <FacebookSdk appId="764673526884567"></FacebookSdk>

            <BootstrapContainerLayout>
                {this.props.children || (<Poser></Poser>)}
            </BootstrapContainerLayout>
        </div>);
}
export default renderer;
//# sourceMappingURL=renderer.jsx.map