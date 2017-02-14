import React = require("react");
import SocialMediaOption from "../SocialMediaOption";
import {List} from "native-base";

export function render() {
  return (
      <List>
          <SocialMediaOption value="facebook" label="Facebook"></SocialMediaOption>

          <SocialMediaOption value="linkedin" label="LinkedIn"></SocialMediaOption>
      </List>
  )
}

export default render;
