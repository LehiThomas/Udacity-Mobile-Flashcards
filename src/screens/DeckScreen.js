import React, { Component } from "react";
import { View, Text } from "react-native";

import StandardButton from "../components/StandardButton";

class DeckScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { deck } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            margin: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "grey", fontSize: 50 }}>{deck.title}</Text>
          <Text style={{ color: "grey", fontSize: 50 }}>
            {deck.questions.length} Cards
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            margin: 20
          }}
        >
          <StandardButton
            pressMe={() => navigate("DeckList")}
            buttonText="START"
          />
          <StandardButton
            pressMe={() => navigate("AddCardScreen", { deck: deck })}
            buttonText="ADD CARD"
          />
        </View>
      </View>
    );
  }
}

export default DeckScreen;
