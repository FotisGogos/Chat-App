import React, { Component } from "react";
import { View, Text, StyleSheet} from 'react-native';


class Chat extends Component {
  componentDidMount() {
    let { name } = this.props.route.params;
    this.props.navigation.setOptions({ title: name });
  }

  render() {
    let { color } = this.props.route.params;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color,
        }}
      >
        <Text
        style={{color: "#FFFFFF"}}
        >Hello Chat!</Text>
      </View>
    );
  }
}

export default Chat;

