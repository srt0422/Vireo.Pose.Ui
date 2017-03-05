"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const native_base_1 = require("native-base");
const React = require("react");
const Poser_1 = require("../Presentation/Poser");
class Navigation extends React.Component {
    constructor() {
        super();
        this.state = this.getInitialState();
    }
    render() {
        return (<react_native_1.NavigatorIOS style={{ flex: 1 }} initialRoute={this.state.routes.home}/>);
        /*renderScene={this.navigatorRenderScene}*/
    }
    navigatorRenderScene(route, navigator) {
        return (<native_base_1.View style={{ marginTop: 100 }}>
          <native_base_1.Text style={{ fontSize: 20 }}>Hello From second component</native_base_1.Text>
        </native_base_1.View>);
        // return (<View style={styles.wrap}><route.component navigator={navigator}></route.component></View>);
    }
    getInitialState() {
        return {
            routes: {
                home: {
                    title: "POSE",
                    component: Poser_1.default,
                    index: 0
                }
            }
        };
    }
}
exports.Navigation = Navigation;
let styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
exports.default = Navigation;
