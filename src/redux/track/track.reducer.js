const INITIAL_STATE = {
  activeTrack: null,
  playingQueue: [],
};

const trackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TRACK":
      return {
        ...state,
        activeTrack: action.payload.track,
      };
    case "SET_PLAYING_QUEUE":
      return {
        ...state,
        playingQueue: action.payload.tracks,
      };
    default:
      return state;
  }
};

export default trackReducer;
