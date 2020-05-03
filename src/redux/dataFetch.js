import axios from "axios";
import {
  getDataBegin,
  getDataFailure,
  getAlbumsSuccess,
  getAlbumInfoSuccess,
} from "./data/data.actions";

export function getAlbums() {
  return (dispatch) => {
    dispatch(getDataBegin());
    return axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/`)
      .then((res) => {
        dispatch(getAlbumsSuccess(res.data.albums.data));
        return res.data.albums.data;
      })
      .catch((error) => dispatch(getDataFailure(error)));
  };
}

export function getAlbumInfo(albumId) {
  return (dispatch) => {
    dispatch(getDataBegin());
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}`
      )
      .then((res) => {
        dispatch(getAlbumInfoSuccess(res.data));
        return res.data;
      })
      .catch((error) => dispatch(getDataFailure(error)));
  };
}
