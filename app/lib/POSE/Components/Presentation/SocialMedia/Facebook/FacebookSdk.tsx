import React = require("react");

class FacebookSdk extends React.Component<IFacebookSdkProps, any>{

    constructor() {
        super();

        this.initializeFBSdk = this.initializeFBSdk.bind(this);
        this.onFBLoaded = this.onFBLoaded.bind(this);
    }

    render() {
        return null;
    }

    componentWillMount() {
        (function (d, s, id, callback) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s) as HTMLInputElement; js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";

            let onreadystatechange = js.onload = function () {
                var state = s["readyState"];
                if (!callback["done"] && (!state || /loaded|complete/.test(state))) {
                    callback["done"] = true;
                    callback();
                }
            };

            js["onreadystatechange"] = onreadystatechange;

            fjs.parentNode.insertBefore(js, fjs);
        } (document, 'script', 'facebook-jssdk', this.onFBLoaded));
    }

    onFBLoaded() {
        this.initializeFBSdk();

        if (this.props.onLoad) {
            this.props.onLoad();
        }
    }

    public initializeFBSdk() {
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
}

export FacebookSdk;

export default FacebookSdk;
