import * as React from "react";
import BootstrapContainerLayout from "../../../HTML/Components/BootstrapContainerLayout";
import FacebookSdk from "../Presentation/SocialMedia/Facebook/FacebookSdk";

import Poser from "../Presentation/Poser";
import LoadingScreen from "../Presentation/LoadingScreen";

const fn = function () {

        return (
        <div>
            <FacebookSdk appId="764673526884567"></FacebookSdk>

            <BootstrapContainerLayout>
                {this.props.children || (<Poser></Poser>)}
            </BootstrapContainerLayout>
            {/*Show the loading screen if the loading property is set to true*/}
            {this.Store.Loading ? (<LoadingScreen />) : null}

        </div>
    );
}

export var renderer = fn;

export default fn;