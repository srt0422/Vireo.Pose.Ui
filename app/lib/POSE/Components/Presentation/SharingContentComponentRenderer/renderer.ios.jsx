"use strict";
const React = require('react');
const native_base_1 = require('native-base');
const react_native_easy_grid_1 = require('react-native-easy-grid');
const SharingInputComponent = require("../SharingInputComponent");
const SharingInputTypeComponent = require("../SharingInputTypeComponent");
module.exports = function () {
    return (<native_base_1.Card>
                <native_base_1.CardItem>
                    <react_native_easy_grid_1.Grid>
                        <react_native_easy_grid_1.Col size={37.5}>
                            <SharingInputTypeComponent value={this.props.value} types={{
        Message: "Message",
        Link: "Link",
        Picture: "Picture"
    }} onTypeChanged={this.props.onChange} style={this.props.style.sharingInputType}/>
                        </react_native_easy_grid_1.Col>
                        <react_native_easy_grid_1.Col size={62.5} style={{
        alignItems: "flex-end"
    }}>
                            <SharingInputComponent label={this.props.label} style={this.props.style} value={this.props.value} type={this.props.type} onContentChange={this.props.onContentChange}/>
                        </react_native_easy_grid_1.Col>
                    </react_native_easy_grid_1.Grid>
                </native_base_1.CardItem>
            </native_base_1.Card>);
};
//# sourceMappingURL=renderer.ios.jsx.map