

const deckReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_DECKS":
      return state;
    case "FETCH_DECKS_FULFILLED":
      return action.payload;
    case "ADD_DECK":
      return {
        ...state,
        [action.deck.title]: action.deck
      };
    default:
      return state;
  }
};

export default deckReducer;
