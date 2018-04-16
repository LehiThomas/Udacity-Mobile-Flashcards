import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import _ from "lodash";

import DeckListItem from "../components/DeckListItem";
import DeckService from "../services/DeckService";

class DeckListScreen extends Component {
  constructor() {
    super();

    this.state = {
      decks: {}
    };
  }

  componentDidMount() {
    DeckService.getDecksService().then(res => {
      this.setState({
        decks: res
      });
    });
  }

  displayDecks = decks => {
    if (!_.isEmpty(decks)) {
      const { navigate } = this.props.navigation;
      let deckArray = Object.values(decks);
      return (
        <View>
          {deckArray.map((deck, index) => (
            <DeckListItem deck={deck} navigate={navigate} key={deck + index} />
          ))}
        </View>
      );
    } else {
      return <View />;
    }
  };

  render() {
    const { decks } = this.state;
    console.log(">>>", decks);
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          margin: 20,
          alignItems: "center"
        }}
      >
        {this.displayDecks(decks)}
      </ScrollView>
    );
  }
}

export default DeckListScreen;
