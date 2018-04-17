import { FETCH_DECKS } from "../config/consts";

const deckReducer = (state = {}, action) => {
  switch (action.type) {
    case `${FETCH_DECKS}_FULFILLED`:
      return action.payload;
    default:
      return state;
  }
};

export default deckReducer;
