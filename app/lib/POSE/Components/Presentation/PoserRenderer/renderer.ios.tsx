import React = require('react');
import {List, ListItem, Text, Button} from 'native-base';
import SharingContentComponent = require("../SharingContentComponent");
import SocialMediaSelectorComponent = require("../SocialMediaSelectorComponent");
import SocialOptions = require("../../SocialProviders");

import styles from "../../../styles";

export  function render() {
    return (<List style={styles.poser}>
<ListItem>
            <SharingContentComponent
                type={this.state.type}
                value={this.state.value}
                label={this.labelMap[this.state.value]}
                onChange={(val)=> this.typeChanged({
                    value: val,
                    type: this.typeMap[val]
                })}
                onContentChange={(val) => this.postValue = val}
                wrapperClass="form-group"
                style={styles.sharingContentComponent} />
</ListItem>
<ListItem>
            <SocialMediaSelectorComponent options={SocialOptions}></SocialMediaSelectorComponent>
</ListItem>
<ListItem>
            <Button
            onPress={this.onClick}
                    styles={styles.shareButton}
                    title="Share"
                    color="blue"
            ></Button>
</ListItem>
        </List>)
}

export default render;

//
// return (
//   <View className={`${styles["center-block"]} ${styles.clearfix} ${styles['sharing-component']}`} style={formStyle}>
//     <SharingContentComponent
//         type={this.state.type}
//         value={this.contentMap[this.state.value]}
//         label={this.labelMap[this.state.value]}
//         onChange={this.typeChanged}
//         onContentChange={(val) => this.postValue = val}
//         wrapperClass="form-group" />
//
//     <SocialMediaSelectorComponent options={SocialOptions}></SocialMediaSelectorComponent>
//
//     <button
//         onClick={this.onClick}
//         className={`${styles.btn} ${styles["btn-lg"]} ${styles["btn-success"]} ${styles["btn-block"]}`}
//         value="Share"
//         type="button"
//         children="Share" />
//
// </form>
// );
