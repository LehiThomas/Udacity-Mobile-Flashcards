import React from "react";
import { StatusBar } from "react-native";
import Expo from "expo";
import { StackNavigator, TabNavigator } from "react-navigation";

import AddCardScreen from "../screens/AddCardScreen";
import DeckListScreen from "../screens/DeckListScreen";
import DeckScreen from "../screens/DeckScreen";
import NewDeckScreen from "../screens/NewDeckScreen";
import QuizScreen from "../screens/QuizScreen";

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckListScreen,
      navigationOptions: {
        tabBarLabel: "DECKS"
      }
    },
    NewDeckScreen: {
      screen: NewDeckScreen,
      navigationOptions: {
        tabBarLabel: "ADD NEW DECK"
      }
    }
  },
  {
    tabBarOptions: {
      style: { marginTop: Expo.Constants.statusBarHeight }
    }
  }
);

export default StackNavigator({
  DeckListScreen: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckScreen: {
    screen: DeckScreen,
    navigationOptions: {
      headerTitle: "Deck List"
    }
  },
  AddCardScreen: {
    screen: AddCardScreen,
    navigationOptions: {
      headerTitle: "Deck"
    }
  },
  QuizScreen: { screen: QuizScreen }
});
