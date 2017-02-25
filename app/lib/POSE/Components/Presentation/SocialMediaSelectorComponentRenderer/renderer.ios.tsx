import React = require("react");
import SocialMediaOption from "../SocialMediaOption";
import {List, ListItem, Card, CardItem} from "native-base";

export function render() {
  return (
    <Card >
    <List >
          <SocialMediaOption value="facebook" label="Facebook"></SocialMediaOption>
          <SocialMediaOption value="linkedin" label="LinkedIn"></SocialMediaOption>
    </List>
    
    </Card>
  );
}

export default render;
