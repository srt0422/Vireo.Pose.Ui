// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";

class LoadingScreen extends React.Component<any, any>{
    render() {
        if (this.props.loading) {
            return (<div></div>);
        }
        else return null
    }
}

export default LoadingScreen;