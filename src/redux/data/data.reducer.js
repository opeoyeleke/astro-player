const INITIAL_STATE = {
  title: "Albums",
  loading: false,
  albums: null,
  album: [],
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
    case "GET_ALBUM_INFO_SUCCESS":
      return {
        ...state,
        loading: false,
        album: action.payload.album,
      };
    default:
      return state;
  }
};

export default dataReducer;
