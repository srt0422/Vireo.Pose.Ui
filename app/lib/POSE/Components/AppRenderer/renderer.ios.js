"use strict";
const React = require("react");
const native_base_1 = require("native-base");
const Poser_1 = require("../Presentation/Poser");
module.exports = function (props) {
    return (<native_base_1.Container>
      <native_base_1.Header>
          <native_base_1.Title>POSE</native_base_1.Title>
      </native_base_1.Header>
      <native_base_1.Content>
          <Poser_1.default></Poser_1.default>
           </native_base_1.Content>
  </native_base_1.Container>);
    // <Navigation></Navigation>
};
