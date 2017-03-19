import * as React from "react";
import SocialMediaOption from "../SocialMediaOption";
export default function () {
    return (<div className={`${this.props.styles["list-group"]}`}>
          <SocialMediaOption value="facebook" label="Facebook"></SocialMediaOption>
          <SocialMediaOption value="twitter" label="Twitter"></SocialMediaOption>
          <SocialMediaOption value="linkedin" label="LinkedIn"></SocialMediaOption>
      </div>);
}
//# sourceMappingURL=renderer.jsx.map