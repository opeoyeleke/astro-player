const INITIAL_STATE = {
  activeTrack: null,
  playingQueue: [],
  trackImage: null,
  trackName: "Christmas",
  trackArtist: "Ne-yo",
};

const trackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TRACK":
      return {
        ...state,
        activeTrack: action.payload.track,
      };
    default:
      return state;
  }
};

export default trackReducer;
