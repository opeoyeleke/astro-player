export const changeIsPlaying = () => ({
  type: "PLAY_PAUSE",
});

export const muteUnmute = () => ({
  type: "MUTE_UNMUTE",
});

export const setActiveTrack = (track) => ({
  type: "SET_ACTIVETRACK",
  payload: track,
});
