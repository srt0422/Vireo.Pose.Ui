"use strict";
const React = require("react");
const native_base_1 = require("native-base");
function render() {
    return (<native_base_1.ListItem>
      <native_base_1.CheckBox onPress={this.onSelected} checked={this.state.selected}/>
      <native_base_1.Text> Send to {this.props.label}</native_base_1.Text>
      </native_base_1.ListItem>);
}
exports.render = render;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = render;
//# sourceMappingURL=renderer.ios.jsx.map