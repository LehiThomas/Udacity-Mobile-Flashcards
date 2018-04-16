import { GET_DECKS, CREATE_DECK } from "../config/consts";
import DeckService from "../services/DeckService";

// export const getDecks = decks => {
//   return {
//     type: GET_DECKS,
//     decks
//   };
// };

export const getDecks = () => dispatch => {
  return dispatch({
    type: "FETCH_DECKS",
    payload: DeckService.getDecksService()
  });
};

export const createDeck = deckTitle => dispatch => {
  const newDeck = {
    [deckTitle]: {
      title: deckTitle,
      questions: []
    }
  };
  return DeckService.createDeckService(newDeck).then(res =>
    dispatch({ type: "FETCH_DECKS", payload: DeckService.getDecksService() })
  );
};

export const addCardToDeck = (deck, card) => dispatch => {
  return DeckService.createCardService(newDeck).then(res =>
    dispatch({ type: "FETCH_DECKS", payload: DeckService.getDecksService() })
  );
};