import ReactNative = require("react-native");
  import React = require("react");
  import Poser from "../Presentation/Poser";

const {Navigator} = ReactNative;

export class Navigation extends React.Component<any, any>{
  render() {
    return (
      <Navigator
        initialRoute={{title: "poser", id: 'poser'}}
        renderScene={this.navigatorRenderScene} />
    );

      // style={styles.container}
  }

  navigatorRenderScene(route, navigator) {

    switch (route.id) {
      case 'poser':
        return (<Poser navigator={navigator}></Poser>);
    }
  }
}

export default Navigation;
