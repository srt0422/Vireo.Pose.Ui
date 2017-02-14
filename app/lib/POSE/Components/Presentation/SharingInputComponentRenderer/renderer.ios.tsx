import React = require('react');
import {InputGroup, Input} from 'native-base';
import ImagePicker from "react-native-image-picker";

export = function(){

    switch(this.props.value){
        case "Picture":
            return ImagePicker.showImagePicker(null,
                (response) => {
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
            return (
                <InputGroup borderType='regular' >
                        <Input onChangeText={(val) => this.props.onContentChange(val) } placeholder='Type your text here' />
                    </InputGroup>)
          }
}
