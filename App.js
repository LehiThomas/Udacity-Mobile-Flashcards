import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MobileFlashCards from "./src/index";
import { Provider } from "react-redux";
import store from "./src/config/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MobileFlashCards />
      </Provider>
    );
  }
}
