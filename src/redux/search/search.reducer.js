const INITIAL_STATE = {
  loading: false,
  error: null,
  searchResult: null,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_SEARCH_BEGIN":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_SEARCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "GET_SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        searchResult: action.payload.result,
      };
    default:
      return state;
  }
};

export default searchReducer;
