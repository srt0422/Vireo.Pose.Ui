"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const native_base_1 = require("native-base");
const FontAwesome_1 = require("react-native-vector-icons/FontAwesome");
const styles = {
    buttonText: {
        fontSize: 16
    },
    test: {}
};
function renderer() {
    if (this.state == null) {
        this.state = {
            showModal: false
        };
    }
    return (<native_base_1.View>
      <native_base_1.Button rounded onPress={setModalVisible.bind(this, true)} iconRight>
        <native_base_1.Text style={styles.buttonText}>{this.props.types[this.props.value]} </native_base_1.Text>
        <FontAwesome_1.default name="chevron-down" color="white"/>
      </native_base_1.Button>

      <react_native_1.Modal visible={this.state.showModal}>
        <native_base_1.Card>
          {Object.keys(this.props.types).map((key, i, col) => {
        return (<native_base_1.CardItem key={key} button onPress={() => {
            setModalVisible.call(this, false);
            this.props.onTypeChanged.call(this, key);
        }}>
                  <native_base_1.Text>{this.props.types[key]}</native_base_1.Text>
                </native_base_1.CardItem>);
    })}
        </native_base_1.Card>
      </react_native_1.Modal>
      </native_base_1.View>);
}
exports.renderer = renderer;
function setModalVisible(visible) {
    this.setState({ showModal: visible });
}
;
exports.default = renderer;
//# sourceMappingURL=renderer.ios.jsx.map