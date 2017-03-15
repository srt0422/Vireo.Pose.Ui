import * as React from 'react';
import {View, Text, Button, List, ListItem, Card, CardItem }  from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
​
import SharingInputComponent from "../SharingInputComponent";
import SharingInputTypeComponent from "../SharingInputTypeComponent";

export function renderer() {
    return (<Card>
                <CardItem>
                    <Grid>
                        <Col size={37.5}>
                            <SharingInputTypeComponent
                                value={this.props.value}
                                types={{
                                Message: "Message",
                                Link: "Link",
                                Picture: "Picture"
                                    }}
                                onTypeChanged={this.props.onChange}
                                style={this.props.style.sharingInputType} />
                        </Col>
                        <Col size={62.5} style={{
                            alignItems: "flex-end"
                        }}>
                            <SharingInputComponent label={this.props.label} style={this.props.style} value={this.props.value} type={this.props.type} onContentChange={this.props.onContentChange} />
                        </Col>
                    </Grid>
                </CardItem>
            </Card>);
}

export default renderer;
