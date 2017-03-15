import * as React from "react";
import SharingContentComponent from "../SharingContentComponent";
import SocialMediaSelectorComponent from "../SocialMediaSelectorComponent";
import SocialOptions from "../../SocialProviders";

import styles from "../../../styles";

export function render(props, state) {
    return (<form className={`${styles["center-block"]} ${styles.clearfix} ${styles.sharingComponent}`}>
        <SharingContentComponent
            type={this.state.type}
            value={this.contentMap[this.state.value]}
            label={this.labelMap[this.state.value]}
            onChange={(e) => this.typeChanged({
                value: e.target.innerText,
                type: this.typeMap[e.target.innerText]
            })}
            onContentChange={(val) => this.postValue = val}
            wrapperClass="form-group" />
        <SocialMediaSelectorComponent options={SocialOptions}></SocialMediaSelectorComponent>

        <button
            onClick={this.onClick}
            className={`${styles.btn} ${styles["btn-lg"]} ${styles["btn-success"]} ${styles["btn-block"]}`}
            value="Share"
            type="button"
            children="Share" />

    </form>);
}

export default render;
