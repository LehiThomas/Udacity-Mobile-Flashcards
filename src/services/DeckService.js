import { AsyncStorage } from "react-native";
import { DECK_STORAGE } from "../config/consts";

class DeckService {
  constructor() {
    this.initialState = {
      React: {
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      },
      JavaScript: {
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      }
    };
  }

  setDefaultData = async () => {
    return await AsyncStorage.setItem(
      DECK_STORAGE,
      JSON.stringify(this.initialState)
    ).then(() => this.initialState);
  };

  getDecksService = async () => {
    return await AsyncStorage.getItem(DECK_STORAGE).then(res => {
      console.log("2", res);
      return res === null ? this.setDefaultData() : JSON.parse(res);
    });
  };

  createDeck = async deckTitle => {
    const deck = {
      [deckTitle]: {
        title: deckTitle,
        questions: []
      }
    };
    return await AsyncStorage.mergeItem(DECK_STORAGE, JSON.stringify(deck));
  };
}

export default new DeckService();
