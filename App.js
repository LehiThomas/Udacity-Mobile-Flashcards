import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MobileFlashCards from "./src/index";
import { Provider } from "react-redux";
import store from "./src/config/store";
import NotificationsService from "./src/services/NotificationsService";

export default class App extends React.Component {
  componentDidMount() {
    NotificationsService.setLocalNotification();
  }

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <MobileFlashCards />
      </Provider>
    );
  }
}
