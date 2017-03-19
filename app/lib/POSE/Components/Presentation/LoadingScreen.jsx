import * as React from "react";
class LoadingScreen extends React.Component {
    render() {
        if (this.props.loading) {
            return (<div></div>);
        }
        else
            return null;
    }
}
export default LoadingScreen;
//# sourceMappingURL=LoadingScreen.jsx.map