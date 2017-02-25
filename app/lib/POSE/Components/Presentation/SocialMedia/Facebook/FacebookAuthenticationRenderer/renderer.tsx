import React = require("react");
import SocialMediaAuthentiationWrapper = require("../../SocialMediaAuthentiationWrapper");
import FacebookSdk = require("../FacebookSdk");
import config from "../../../../../../../config/config";

export function renderer(){

  if (!this.props.shouldAuthenticate()) {
      return null;
  }

  return (
      <SocialMediaAuthentiationWrapper  setAuthCallback={this.setAuthCallback}
                                        shouldAuthenticate={this.props.shouldAuthenticate}
                                        sharingProvider={null}>
          <FacebookSdk appId={config.FacebookAppId as string} onLoad={this.ensureLoggedIn}></FacebookSdk>
      </SocialMediaAuthentiationWrapper>
  );
}

export default renderer;
