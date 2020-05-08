export const getDataBegin = () => ({
  type: "GET_DATA_BEGIN",
});

export const getDataFailure = (error) => ({
  type: "GET_DATA_FAILURE",
  payload: { error },
});

export const getPageTitle = (title) => ({
  type: "GET_PAGE_TITLE",
  payload: { title },
});

export const getAlbumsSuccess = (albums) => ({
  type: "GET_ALBUMS_SUCCESS",
  payload: { albums },
});

export const getArtistsSuccess = (artists) => ({
  type: "GET_ARTISTS_SUCCESS",
  payload: { artists },
});

export const getPlaylistsSuccess = (playlists) => ({
  type: "GET_PLAYLISTS_SUCCESS",
  payload: { playlists },
});

export const getTracksSuccess = (tracks) => ({
  type: "GET_TRACKS_SUCCESS",
  payload: { tracks },
});

export const getAlbumInfoSuccess = (album) => ({
  type: "GET_ALBUM_INFO_SUCCESS",
  payload: { album },
});

export const getArtistInfoSuccess = (artist) => ({
  type: "GET_ARTIST_INFO_SUCCESS",
  payload: { artist },
});
