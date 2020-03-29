import { combineReducers } from "redux";

import trackReducer from "./track/track.reducer";

export default combineReducers({
  track: trackReducer
});
