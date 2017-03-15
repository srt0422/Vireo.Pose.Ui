import * as React from "react";
import { ListItem, Text, CheckBox } from "native-base";
export function render() {
    return (<ListItem>
      <CheckBox onPress={this.onSelected} checked={this.state.selected}/>
      <Text> Send to {this.props.label}</Text>
      </ListItem>);
}
export default render;
