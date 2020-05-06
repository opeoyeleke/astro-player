import axios from "axios";
import {
  getDataBegin,
  getDataFailure,
  getAlbumsSuccess,
  getAlbumInfoSuccess,
  getPageTitle,
} from "./data/data.actions";

import { setActiveTrack } from "./track/track.actions";

export function getAlbums() {
  return (dispatch) => {
    dispatch(getDataBegin());
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/top?limit=50`
      )
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
      .get(`https://api.deezer.com/album/${albumId}`)
      .then((res) => {
        dispatch(getAlbumInfoSuccess(res.data));
        dispatch(getPageTitle(res.data.title));
        return res.data;
      })
      .catch((error) => dispatch(getDataFailure(error)));
  };
}

export function getTrackInfo(trackId) {
  return (dispatch) => {
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${trackId}`
      )
      .then((res) => {
        dispatch(setActiveTrack(res.data));
        return res.data;
      })
      .catch((error) => console.log(error));
  };
}
