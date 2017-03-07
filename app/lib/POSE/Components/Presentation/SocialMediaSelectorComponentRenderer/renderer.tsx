import * as React from "react";

import SocialMediaOption from "../SocialMediaOption";
import styles = require("../../../styles");

export default function(){
  return (
      <div className={`${styles["list-group"]}`}>
          <SocialMediaOption value="facebook" label="Facebook"></SocialMediaOption>

          <SocialMediaOption value="linkedin" label="LinkedIn"></SocialMediaOption>
      </div>
  )
}
