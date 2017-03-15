import * as React from 'react';
const {Component} = React;
import {InputGroup, Input, Button, Text, Card, CardItem, View} from 'native-base';
import ImagePicker = require("react-native-image-picker");

export function renderer(){

            if(this.props.value == "Picture"){
                        return (
                        <View>
                                    <Button rounded info
                                                onPress={showImagePicker.bind(this)}>
                                                <Text>{this.props.label}</Text>
                                    </Button>
                        </View>
                        );
            }
            else {
                        return (
                                    <InputGroup borderType='rounded' >
                                                <Input placeholder={this.props.label} onChangeText={(val) => this.props.onContentChange(val) } />
                                    </InputGroup>)
            }
}

function showImagePicker(){
            ImagePicker.showImagePicker(null,
                (response) => {
                    if (response.error) {
                        throw response.error;
                    }

                    if(response.didCancel){
                     return;
                    }

                    if(response.uri != null && response.uri != "") {
                    // You can also display the image using data:
                    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

// TODO: look into how I'm dealing with images right now.

                    this.onContentChange(response.uri);
                }
            });
}

export default renderer;
