"use strict";
module.exports = function (props) {
    return (<View>
          <FacebookSdk appId="764673526884567"></FacebookSdk>

          <BootstrapContainerLayout>
              {props.children}
          </BootstrapContainerLayout>
      </View>);
};
