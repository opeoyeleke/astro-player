import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

let middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares = [logger, thunk];
} else {
  middlewares = [thunk];
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
