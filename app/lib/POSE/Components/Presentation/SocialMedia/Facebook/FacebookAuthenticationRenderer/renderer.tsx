declare var FB;

export function renderer(){

  if (!this.props.shouldAuthenticate()) {
      return null;
  }

  return (
      <SocialMediaAuthentiationWrapper  setAuthCallback={this.setAuthCallback}
                                        shouldAuthenticate={this.props.shouldAuthenticate}
                                        sharingProvider={null}>
          <FacebookSdk appId={config.get("FacebookAppId") as string} onLoad={this.ensureLoggedIn}></FacebookSdk>
      </SocialMediaAuthentiationWrapper>
  );
}


  function onFBLoaded() {
      initializeFBSdk();

      if (this.props.onLoad) {
          this.props.onLoad();
      }
  }

  function initializeFBSdk() {
      if (FB && FB.init) {
          FB.init({
              appId: this.props.appId,
              xfbml: true,
              version: 'v2.4'
          });

          return;
      }

      console.warn("FB failed to load");
  }

export default renderer;
