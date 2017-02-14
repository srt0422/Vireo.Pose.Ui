import React = require('react');
import ReactNative = require('react-native');
import SharingInputComponent = require("../SharingInputComponent");
import SharingInputTypeComponent = require("../SharingInputTypeComponent");

const {View, Text, Button} = ReactNative;

export = function() {
    return (<View className={this.props.wrapperClass}>

                  <SharingInputTypeComponent
                      value={this.props.value}
                      types={['Message', 'Link', 'Picture']}
                      onTypeChanged={this.props.onChange}
                      style={this.props.style.sharingInputType} />


              <Text>{this.props.label}</Text>

              <View>

              <SharingInputComponent style={this.props.style} type={this.props.type} onContentChange={this.props.onContentChange} />

              </View>
          </View>)
}

// <View className={`${this.props.style["form-group"]}`}></View>
