"use strict";
const React = require("react");
const { Component } = React;
const native_base_1 = require("native-base");
const ImagePicker = require("react-native-image-picker");
function showImagePicker() {
    ImagePicker.showImagePicker(null, (response) => {
        if (response.error) {
            throw response.error;
        }
        if (response.didCancel) {
            return;
        }
        if (response.uri != null && response.uri != "") {
            this.onContentChange(response.uri);
        }
    });
}
module.exports = function () {
    if (this.props.value == "Picture") {
        return (<native_base_1.View>
                                    <native_base_1.Button rounded info onPress={showImagePicker.bind(this)}>
                                                <native_base_1.Text>{this.props.label}</native_base_1.Text>
                                    </native_base_1.Button>
                        </native_base_1.View>);
    }
    else {
        return (<native_base_1.InputGroup borderType='rounded'>
                                                <native_base_1.Input placeholder={this.props.label} onChangeText={(val) => this.props.onContentChange(val)}/>
                                    </native_base_1.InputGroup>);
    }
};
