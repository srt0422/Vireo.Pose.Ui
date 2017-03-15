"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const native_base_1 = require("native-base");
const react_native_easy_grid_1 = require("react-native-easy-grid");
const SharingInputComponent_1 = require("../SharingInputComponent");
const SharingInputTypeComponent_1 = require("../SharingInputTypeComponent");
function renderer() {
    return (<native_base_1.Card>
                <native_base_1.CardItem>
                    <react_native_easy_grid_1.Grid>
                        <react_native_easy_grid_1.Col size={37.5}>
                            <SharingInputTypeComponent_1.default value={this.props.value} types={{
        Message: "Message",
        Link: "Link",
        Picture: "Picture"
    }} onTypeChanged={this.props.onChange} style={this.props.style.sharingInputType}/>
                        </react_native_easy_grid_1.Col>
                        <react_native_easy_grid_1.Col size={62.5} style={{
        alignItems: "flex-end"
    }}>
                            <SharingInputComponent_1.default label={this.props.label} style={this.props.style} value={this.props.value} type={this.props.type} onContentChange={this.props.onContentChange}/>
                        </react_native_easy_grid_1.Col>
                    </react_native_easy_grid_1.Grid>
                </native_base_1.CardItem>
            </native_base_1.Card>);
}
exports.renderer = renderer;
exports.default = renderer;
//# sourceMappingURL=renderer.ios.jsx.map