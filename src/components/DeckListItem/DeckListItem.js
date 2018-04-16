import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

class DeckListItem extends Component {
  getQuestionCount = () => {
    const { deck } = this.props;
    if (deck.questions.length === "undefined") {
      return "0";
    } else {
      return deck.questions.length;
    }
  };

  render() {
    const { deck } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigate("DeckScreen", { deck: deck });
        }}
        activeOpacity={0.8}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{deck.title}</Text>
          <Text style={styles.text}>{deck.questions.length} Cards</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default DeckListItem;
