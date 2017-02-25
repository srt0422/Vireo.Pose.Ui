"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReactNative = require("react-native");
const React = require("react");
const Poser_1 = require("../Presentation/Poser");
const { Navigator } = ReactNative;
class Navigation extends React.Component {
    render() {
        return (<Navigator initialRoute={{ title: "poser", id: 'poser' }} renderScene={this.navigatorRenderScene}/>);
    }
    navigatorRenderScene(route, navigator) {
        switch (route.id) {
            case 'poser':
                return (<Poser_1.default navigator={navigator}></Poser_1.default>);
        }
    }
}
exports.Navigation = Navigation;
exports.default = Navigation;
