import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

import StandardButton from "../StandardButton";

class Results extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Score:{" "}
          {(this.props.score / this.props.questionCount * 100).toFixed(0)}%
        </Text>
        <Text style={styles.text}>
          You got {this.props.score}/{this.props.questionCount} right
        </Text>
        <View style={styles.bottomButtons}>
          <StandardButton
            pressMe={() => this.props.restartQuiz()}
            buttonText="TRY AGAIN"
          />
          <StandardButton
            pressMe={() => this.props.goBack()}
            buttonText="BACK TO DECK"
          />
        </View>
      </View>
    );
  }
}

export default Results;
