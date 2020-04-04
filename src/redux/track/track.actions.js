export const playPause = Boolean => ({
  type: "PLAY_PAUSE",
  payload: Boolean
});

export const muteUnmute = Boolean => ({
  type: "MUTE_UNMUTE",
  payload: Boolean
});
