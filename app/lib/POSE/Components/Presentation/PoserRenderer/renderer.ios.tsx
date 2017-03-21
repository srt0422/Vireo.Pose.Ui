import React = require('react');
import {List, ListItem, Text, Button, View, Card, CardItem} from 'native-base';
import SharingContentComponent from "../SharingContentComponent";
import SocialMediaSelectorComponent from "../SocialMediaSelectorComponent";
import SocialOptions = require("../../SocialProviders");

import style from "../../../styles";

export  function render() {
    return (
        <View>
            <SharingContentComponent
                type={this.state.type}
                value={this.state.value}
                label={labelMap[this.state.value]}
                onChange={(val)=> this.typeChanged({
                    value: val,
                    type: this.typeMap[val]
                })}
                onContentChange={(val) => this.postValue = val}
                wrapperClass="form-group"
                style={style.sharingContentComponent} />
            <SocialMediaSelectorComponent options={SocialOptions}></SocialMediaSelectorComponent>

            <Button block large success
            onPress={this.onClick}
                    style={style.shareButton}
                    color="blue">
                <Text>Share</Text>
            </Button>
        </View>
     );
}

const labelMap = {
    Message: "Type Message",
    Link: "Copy Link",
    Picture: "Choose Picture"
}

export default render;