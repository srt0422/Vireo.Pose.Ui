// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";
class LoadingScreen extends React.Component {
    render() {
        const { loadingScreen, loadingIcon } = this.props.styles;
        if (this.props.loading) {
            return (<div className={this.props.styles.loadingScreen}>
                    <i className={this.props.styles.loadingIcon}/>
                </div>);
        }
        else
            return (null);
    }
}
export default LoadingScreen;
