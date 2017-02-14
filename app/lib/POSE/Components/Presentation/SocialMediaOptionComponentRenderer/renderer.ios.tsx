import React = require("react");
import {Button,ListItem, Text} from "native-base";

export function render(){
  return (
    <ListItem>
      <Button block onPress={this.onSelected}><Text>{this.props.label}</Text></Button>
    </ListItem>
  )
}

export default render;
