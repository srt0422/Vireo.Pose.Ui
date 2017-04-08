import * as React from "react";

import SocialMediaOption from "../SocialMediaOption";

export default function () {
    return (
        <div className={`${this.props.styles["list-group"]}`}>
            <SocialMediaOption styles={this.props.styles} value="facebook" label="Facebook"></SocialMediaOption>
            <SocialMediaOption styles={this.props.styles} value="twitter" label="Twitter"></SocialMediaOption>
            <SocialMediaOption styles={this.props.styles} value="linkedin" label="LinkedIn"></SocialMediaOption>
        </div>
    )
}
