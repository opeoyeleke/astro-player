export const setActiveTrack = (track) => ({
  type: "SET_ACTIVE_TRACK",
  payload: { track },
});

export const setPlayingQueue = (tracks) => ({
  type: "SET_PLAYING_QUEUE",
  payload: { tracks },
});
