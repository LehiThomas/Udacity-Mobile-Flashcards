import { AsyncStorage } from "react-native";
import { DECK_STORAGE_KEY } from "../config/consts";

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
      DECK_STORAGE_KEY,
      JSON.stringify(this.initialState)
    ).then(() => this.initialState);
  };

  getDecksService = async () => {
    return await AsyncStorage.getItem(DECK_STORAGE_KEY).then(JSON.parse);
  };

  getDeckService = async id => {
    return await AsyncStorage.getItem(DECK_STORAGE_KEY).then(res => {
      const decks = JSON.parse(res);
      return decks[id];
    });
  };

  createDeckService = async deck => {
    return await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck));
  };

  createCardService = async (deck, card) => {
    deck.questions.push(card);
    return await AsyncStorage.mergeItem(
      DECK_STORAGE_KEY,
      JSON.stringify({ [deck.title]: deck })
    );
  };
}

export default new DeckService();
