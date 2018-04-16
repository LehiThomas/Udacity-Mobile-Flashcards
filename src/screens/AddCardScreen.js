import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { connect } from "react-redux";

import StandardButton from "../components/StandardButton";
import { addCardToDeck } from "../actions/decks";

class AddCardScreen extends Component {
  createCard = () => {
    const card = {
      question: this.state.question,
      answer: this.state.answer
    }
    this.props.addCardToDeck(this.props.deck.id, card)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flex: 1,
            margin: 20,
            marginBottom: 0,
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "grey", fontSize: 50 }}>Question:</Text>
          <TextInput
            style={{ fontSize: 20, padding: 15 }}
            placeholder="deck title"
            onChangeText={text => this.setState({ question: text })}
          />
        </View>
        <View
          style={{
            flex: 1,
            margin: 20,
            marginTop: 0,
            justifyContent: "flex-start"
          }}
        >
          <Text style={{ color: "grey", fontSize: 50 }}>Answer:</Text>
          <TextInput
            style={{ fontSize: 20, padding: 15 }}
            placeholder="deck title"
            onChangeText={text => this.setState({ answer: text })}
          />
        </View>
        <View
          style={{
            flex: 1,
            margin: 20
          }}
        >
          <StandardButton
            pressMe={() => this.createCard()}
            buttonText="SUBMIT"
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCardToDeck: (deckId, card) => dispatch(addCardToDeck(deckId, card))
});

export default connect(null, mapDispatchToProps)(AddCardScreen);
