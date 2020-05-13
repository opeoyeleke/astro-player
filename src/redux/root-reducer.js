import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import trackReducer from "./track/track.reducer";
import dataReducer from "./data/data.reducer";
import searchReducer from "./search/search.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["track", "data"],
};

const rootReducer = combineReducers({
  track: trackReducer,
  data: dataReducer,
  search: searchReducer,
});

export default persistReducer(persistConfig, rootReducer);
