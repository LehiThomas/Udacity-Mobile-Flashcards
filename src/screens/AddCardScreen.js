import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { connect } from "react-redux";

import StandardButton from "../components/StandardButton";
import { addCardToDeck } from "../actions/decks";

class AddCardScreen extends Component {
  constructor() {
    super();

    this.state = {
      question: "",
      answer: ""
    };
  }

  createCard = () => {
    const { deck } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    const { question, answer } = this.state;
    const card = {
      question: question,
      answer: answer
    };
    if (question === "" || answer === "") {
      Alert.alert("Please give your deck a title");
    } else {
      this.props.addCardToDeck(deck, card);
      this.setState({
        question: "",
        answer: ""
      });
      navigate("DeckListScreen");
    }
  };

  render() {
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
            placeholder="question"
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
            placeholder="answer"
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
  addCardToDeck: (deck, card) => dispatch(addCardToDeck(deck, card))
});

export default connect(null, mapDispatchToProps)(AddCardScreen);
