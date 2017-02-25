import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Navigation from "./app/lib/POSE/Components/Routing/NativeNavigation";
import App from "./app/lib/POSE/Components/App";

import {Container, Header, Title, Content} from 'native-base';

export default class PoseUi extends Component {
    render = () => (<App></App>);
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
