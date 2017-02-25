"use strict";
function renderer() {
    this.initializeFBSdk = initializeFBSdk;
    (function (d, s, id, callback) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
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
    }(document, 'script', 'facebook-jssdk', onFBLoaded));
}
exports.renderer = renderer;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = renderer;
