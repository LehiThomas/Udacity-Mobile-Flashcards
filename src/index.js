import React from "react";
import { View } from "react-native";
import TabNavigator from "./config/routes";
import DeckListScreen from "./screens/DeckListScreen";
class App extends React.Component {
  render() {
    return <TabNavigator />;
  }
}

export default App;
