import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

import reducers from "../reducers";

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducers, middleware);

export default store;
