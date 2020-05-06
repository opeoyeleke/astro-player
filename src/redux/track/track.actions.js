export const setPlayPause = () => ({
  type: "PLAY_PAUSE",
});

export const muteUnmute = () => ({
  type: "MUTE_UNMUTE",
});

export const setActiveTrack = (track) => ({
  type: "SET_ACTIVE_TRACK",
  payload: { track },
});
