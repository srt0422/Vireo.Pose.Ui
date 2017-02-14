"use strict";
const React = require("react");
const native_base_1 = require("native-base");
const { Item } = native_base_1.Picker;
module.exports = function () {
    return (<native_base_1.Picker selectedValue={this.props.value} onValueChange={this.props.onTypeChanged}>
              {this.props.types.map((type, i, col) => {
        return (<Item key={type} label={type} value={type}/>);
    })}
          </native_base_1.Picker>);
};
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
