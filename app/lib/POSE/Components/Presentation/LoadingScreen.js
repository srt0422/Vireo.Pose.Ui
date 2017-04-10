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
