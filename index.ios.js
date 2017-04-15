import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Linking} from 'react-native';
import Navigation from "./app/lib/POSE/Components/Routing/NativeNavigation";
import App from "./app/lib/POSE/Components/App";
import codePush from "react-native-code-push";

import {Container, Header, Title, Content} from 'native-base';
@codePush
 class PoseUi extends Component {

    render(){return <App></App>;}

    componentDidMount() {
        Linking.addEventListener('url', this.handleDeepLink);
    };

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleDeepLink);
    };

    handleDeepLink(e) {
        console.log(arguments);
        const route = e.url.replace(/.*?:\/\//g, "");
        this._navigator.replace(this.state.routes[route]);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('PoseUi', () => PoseUi);

export default PoseUi;
