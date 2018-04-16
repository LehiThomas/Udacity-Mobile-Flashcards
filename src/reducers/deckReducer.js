

const deckReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DECKS_FULFILLED":
      return action.payload;
    default:
      return state;
  }
};

export default deckReducer;
