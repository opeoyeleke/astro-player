export const getSearchBegin = () => ({
  type: "GET_SEARCH_BEGIN",
});

export const getSearchFailure = (error) => ({
  type: "GET_SEARCH_FAILURE",
  payload: { error },
});
export const getSearchSuccess = (result) => ({
  type: "GET_SEARCH_SUCCESS",
  payload: { result },
});
