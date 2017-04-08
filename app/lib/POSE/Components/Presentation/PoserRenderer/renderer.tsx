import * as React from "react";
import SharingContentComponent from "../SharingContentComponent";
import SocialMediaSelectorComponent from "../SocialMediaSelectorComponent";
import SocialOptions from "../../SocialProviders";

export function render(props, state) {
    return (
        <form className={`${this.props.styles["center-block"]} ${this.props.styles.clearfix} ${this.props.styles.sharingComponent}`}>

            <SharingContentComponent
                type={this.state.type}
                value={this.contentMap[this.state.value]}
                label={this.labelMap[this.state.value]}
                onChange={(e) => this.typeChanged({
                    value: e.target.innerText,
                    type: this.typeMap[e.target.innerText]
                })}
                onContentChange={(val) => this.postValue = val}
                wrapperClass="form-group"
                styles={this.props.styles} />

            <SocialMediaSelectorComponent styles={this.props.styles} options={SocialOptions}></SocialMediaSelectorComponent>

            <button
                onClick={this.onClick}
                className={`${this.props.styles.btn} ${this.props.styles["btn-lg"]} ${this.props.styles["btn-success"]} ${this.props.styles["btn-block"]}`}
                value="Share"
                type="button"
                children="Share" />

        </form>
    );
}

export default render;
