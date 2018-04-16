import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

import DeckService from "../services/DeckService";

import StandardButton from "../components/StandardButton";

class NewDeckScreen extends Component {
  constructor() {
    super();

    this.state = {
      deckTitle: ""
    };
  }

  createNewDeck = () => {
    const { navigate } = this.props.navigation;
    DeckService.createDeckService(this.state.deckTitle);
    navigate("DeckList");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flex: 1,
            margin: 20,
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "grey", fontSize: 50 }}>
            What is the title of your new deck?
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            margin: 20
          }}
        >
          <TextInput
            style={{ fontSize: 20, padding: 15 }}
            placeholder="deck title"
            onChangeText={text => this.setState({ deckTitle: text })}
          />
          <StandardButton pressMe={this.createNewDeck} buttonText="SUBMIT" />
        </View>
      </View>
    );
  }
}

export default NewDeckScreen;
