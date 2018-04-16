import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default class StandardButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.pressMe()}
        activeOpacity={0.8}
      >
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>{this.props.buttonText}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
