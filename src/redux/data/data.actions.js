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

export const getAlbumInfoSuccess = (album) => ({
  type: "GET_ALBUM_INFO_SUCCESS",
  payload: { album },
});
