import * as React from "react";
class LinkedInSdk extends React.Component {
    render() {
        return (<script type="text/javascript" src="//platform.linkedin.com/in.js">
            api_key: this.props.apiKey
            authorize: true
        </script>);
    }
}
