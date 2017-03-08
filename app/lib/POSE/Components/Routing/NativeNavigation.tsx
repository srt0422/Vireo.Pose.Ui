import {StyleSheet, NavigatorIOS as Navigator} from "react-native";
import {View, Text} from "native-base";
import * as React from "react";
import Poser from "../Presentation/Poser";

export class Navigation extends React.Component<any, any>{

  constructor(){
    super();
    this.state = this.getInitialState();
  }

  render() {
    return (
      <Navigator style={{flex: 1}}
        initialRoute={this.state.routes.home} />
    );
    /*renderScene={this.navigatorRenderScene}*/
  }

  navigatorRenderScene(route, navigator) {
return(
        <View style={{marginTop:100}}>
          <Text style={{fontSize:20}}>Hello From second component</Text>
        </View>
      );
        // return (<View style={styles.wrap}><route.component navigator={navigator}></route.component></View>);
  }

  public getInitialState() {
    return {
      routes: {
        home: {
          title: "POSE",
          component: Poser,
          index: 0
        }
      }
    };
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Navigation;
