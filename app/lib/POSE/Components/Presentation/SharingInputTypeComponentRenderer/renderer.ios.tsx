import * as React from "react";
import { Icon, Text, View, Picker} from "native-base";
// import ReactNative =require("react-native");

import UnorderedListComponent = require("../../../../HTML/Components/UnorderedListComponent");
import EntypoIcon from 'react-native-vector-icons/Entypo';

const {Item} = Picker;
// const {PickerIOS} = ReactNative;
// const {Item} = PickerIOS;
// const Picker = PickerIOS;

export = function() {
  return (
          <Picker
            selectedValue={this.props.value}
            onValueChange={this.props.onTypeChanged}>
              {this.props.types.map((type, i, col) => {
                  return (<Item key={type} label={type} value={type} />);
              })}
          </Picker>
        );
}
// iosHeader="test"
//   mode="dropdown"
  //
  //   <Text>{type} <EntypoIcon name='chevron-with-circle-down' style={{fontSize: 24}}/></Text>
  // </Item>
// <div className={`${styles.dropdown}`}>
//
//         <button type="button"
//             className={`${styles.btn} ${styles["btn-lg"]} ${styles["btn-info"]} ${styles["dropdown-toggle"]} ${styles["btn-block"]}`}
//             data-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//             ref="button">
//
//             {this.props.value} <span className={styles.caret}></span>
//
//             </button>
//
//         <UnorderedListComponent
//             onItemClick={this.props.onTypeChanged}
//             types={this.props.types} />
//
//     </div>
