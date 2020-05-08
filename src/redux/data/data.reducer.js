const INITIAL_STATE = {
  title: "loading...",
  loading: false,
  albums: null,
  tracks: null,
  playlists: null,
  artists: null,
  album: [],
  artist: null,
  error: null,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PAGE_TITLE":
      return {
        ...state,
        title: action.payload.title,
      };
    case "GET_DATA_BEGIN":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "GET_ALBUMS_SUCCESS":
      return {
        ...state,
        loading: false,
        albums: action.payload.albums,
      };
    case "GET_ARTISTS_SUCCESS":
      return {
        ...state,
        loading: false,
        artists: action.payload.artists,
      };
    case "GET_PLAYLISTS_SUCCESS":
      return {
        ...state,
        loading: false,
        playlists: action.payload.playlists,
      };
    case "GET_TRACKS_SUCCESS":
      return {
        ...state,
        loading: false,
        tracks: action.payload.tracks,
      };
    case "GET_ALBUM_INFO_SUCCESS":
      return {
        ...state,
        loading: false,
        album: action.payload.album,
      };
    case "GET_ARTIST_INFO_SUCCESS":
      return {
        ...state,
        loading: false,
        artist: action.payload.artist,
      };
    default:
      return state;
  }
};

export default dataReducer;
