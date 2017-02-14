"use strict";
const React = require("react");
const ReactNative = require("react-native");
const SharingInputComponent = require("../SharingInputComponent");
const SharingInputTypeComponent = require("../SharingInputTypeComponent");
const { View, Text, Button } = ReactNative;
module.exports = function () {
    return (<View className={this.props.wrapperClass}>

                  <SharingInputTypeComponent value={this.props.value} types={['Message', 'Link', 'Picture']} onTypeChanged={this.props.onChange} style={this.props.style.sharingInputType}/>


              <Text>{this.props.label}</Text>

              <View>

              <SharingInputComponent style={this.props.style} type={this.props.type} onContentChange={this.props.onContentChange}/>

              </View>
          </View>);
};
// <View className={`${this.props.style["form-group"]}`}></View>
