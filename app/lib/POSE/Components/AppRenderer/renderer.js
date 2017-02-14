"use strict";
module.exports = function (props) {
    return (<div>
        <FacebookSdk appId="764673526884567"></FacebookSdk>

        <BootstrapContainerLayout>
            {props.children}
        </BootstrapContainerLayout>
    </div>);
};
