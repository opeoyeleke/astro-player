import { combineReducers } from "redux";

import trackReducer from "./track/track.reducer";
import dataReducer from "./data/data.reducer";

export default combineReducers({
  track: trackReducer,
  data: dataReducer,
});
