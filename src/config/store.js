import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducers from "../reducers";

const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd(action.type);
  return result;
};

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducers, middleware);

export default store;
