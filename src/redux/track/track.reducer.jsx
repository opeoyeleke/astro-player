const INITIAL_STATE = {
  isPlaying: false,
  shuffle: false,
  repeat: "repeatList",
  activeTrack: null,
  playingQueue: [],
  trackImage: null,
  trackName: "Christmas",
  trackArtist: "Ne-yo"
};

const trackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PLAY_PAUSE":
      return {
        ...state,
        isPlaying: action.payload
      };
    default:
      return state;
  }
};

export default trackReducer;
