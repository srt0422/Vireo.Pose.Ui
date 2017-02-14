"use strict";
const React = require("react");
const native_base_1 = require("native-base");
const react_native_image_picker_1 = require("react-native-image-picker");
module.exports = function () {
    switch (this.props.value) {
        case "Picture":
            return react_native_image_picker_1.default.showImagePicker(null, (response) => {
                if (response.error) {
                    throw response.error;
                }
                else {
                    // You can also display the image using data:
                    // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                    this.setState({
                        avatarSource: { uri: response.uri }
                    });
                }
            });
        case "Message":
        default:
            return (<native_base_1.InputGroup borderType='regular'>
                        <native_base_1.Input onChangeText={(val) => this.props.onContentChange(val)} placeholder='Type your text here'/>
                    </native_base_1.InputGroup>);
    }
};
