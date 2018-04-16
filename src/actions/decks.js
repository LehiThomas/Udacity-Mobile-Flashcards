import { GET_DECKS, ADD_DECK } from "../config/consts";

export const getDecks = decks => {
  return {
    type: GET_DECKS,
    decks
  };
};

export const addDeck = deckTitle => {
  const newDeck = {
    [deckTitle]: {
      title: deckTitle,
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    }
  };
  return {
    type: ADD_DECK,
    deck: newDeck
  };
};
