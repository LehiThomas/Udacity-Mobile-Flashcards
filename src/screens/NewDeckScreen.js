import React, { Component } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { connect } from "react-redux";

import DeckService from "../services/DeckService";
import StandardButton from "../components/StandardButton";
import { createDeck } from "../actions/decks";

class NewDeckScreen extends Component {
  constructor() {
    super();

    this.state = {
      deckTitle: ""
    };
  }

  createNewDeck = () => {
    const { navigate } = this.props.navigation;
    if (this.state.deckTitle === "") {
      Alert.alert("Please give your deck a title");
    } else {
      this.props.createDeck(this.state.deckTitle);
      navigate("DeckList");
    }
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

const mapDispatchToProps = dispatch => ({
  createDeck: deckTitle => dispatch(createDeck(deckTitle))
});

export default connect(null, mapDispatchToProps)(NewDeckScreen);
