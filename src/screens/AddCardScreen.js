import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

import StandardButton from "../components/StandardButton";

class AddCardScreen extends Component {
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
            pressMe={() => navigate("DeckScreen")}
            buttonText="SUBMIT"
          />
        </View>
      </View>
    );
  }
}

export default AddCardScreen;
