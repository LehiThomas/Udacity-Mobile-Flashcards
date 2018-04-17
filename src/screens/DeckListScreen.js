import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import _ from "lodash";
import { connect } from "react-redux";

import DeckListItem from "../components/DeckListItem";
import DeckService from "../services/DeckService";
import { getDecks } from "../actions/decks";

class DeckListScreen extends Component {
  componentDidMount() {
    this.props.getDecks();
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
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "grey", fontSize: 30 }}>
            You have no decks. Go to the "ADD NEW DECK" screen to create one.
          </Text>
        </View>
      );
    }
  };

  render() {
    const { decks } = this.props;
    return (
      <View>
        <ScrollView
          contentContainerStyle={{
            margin: 20,
            alignItems: "center"
          }}
        >
          {this.displayDecks(decks)}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ deckReducer }) => ({
  decks: deckReducer
});

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(getDecks())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen);
