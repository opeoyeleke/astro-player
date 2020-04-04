const INITIAL_STATE = {
  isPlaying: false,
  shuffle: false,
  repeat: "repeatList",
  activeTrack: null,
  playingQueue: [],
  trackImage: null,
  trackName: "Christmas",
  trackArtist: "Ne-yo",
  muteSound: false
};

const trackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PLAY_PAUSE":
      return {
        ...state,
        isPlaying: action.payload
      };
    case "MUTE_UNMUTE":
      return {
        ...state,
        muteSound: action.payload
      };
    default:
      return state;
  }
};

export default trackReducer;
