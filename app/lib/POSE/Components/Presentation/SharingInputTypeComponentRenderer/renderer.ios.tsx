import * as React from "react";
import ReactNative = require("react-native");
import { Text, View, Button, List, ListItem, Card, CardItem } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

const {Modal, StyleSheet} = ReactNative;

 const styles = {
   buttonText: {
     fontSize: 16
   },
   test:{}
 };

export = function() {
  if(this.state == null){
      this.state = {
        showModal: false
      };
  }

  return (
    <View>
      <Button
        rounded
        onPress={setModalVisible.bind(this, true)}
        iconRight>
        <Text style={styles.buttonText}>{this.props.types[this.props.value]} </Text>
        <Icon name="chevron-down" color="white" />
      </Button>

      <Modal visible={this.state.showModal}>
        <Card>
          {Object.keys(this.props.types).map((key, i, col) => {
              return (
                <CardItem key={key} button onPress={()=>{
                   setModalVisible.call(this, false);
                   this.props.onTypeChanged.call(this, key);
                }}>
                  <Text>{this.props.types[key]}</Text>
                </CardItem>
              );
          })}
        </Card>
      </Modal>
      </View>
    );
}

function setModalVisible (visible) {
    this.setState({showModal: visible});
};
