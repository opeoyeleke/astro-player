import axios from "axios";
import {
  getDataBegin,
  getDataFailure,
  getPageTitle,
  getAlbumsSuccess,
  getPlaylistsSuccess,
  getTracksSuccess,
  getArtistsSuccess,
  getAlbumTracksSuccess,
  getArtistTracksSuccess,
  getPlaylistTracksSuccess,
  getSearchSuccess,
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

export function getPlaylists() {
  return (dispatch) => {
    dispatch(getDataBegin());
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/top?limit=50`
      )
      .then((res) => {
        dispatch(getPlaylistsSuccess(res.data.playlists.data));
        return res.data.playlists.data;
      })
      .catch((error) => dispatch(getDataFailure(error)));
  };
}

export function getArtists() {
  return (dispatch) => {
    dispatch(getDataBegin());
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/top?limit=50`
      )
      .then((res) => {
        dispatch(getArtistsSuccess(res.data.artists.data));
        return res.data.artists.data;
      })
      .catch((error) => dispatch(getDataFailure(error)));
  };
}

export function getTracks() {
  return (dispatch) => {
    dispatch(getDataBegin());
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/top?limit=50`
      )
      .then((res) => {
        dispatch(getTracksSuccess(res.data.tracks.data));
        return res.data.tracks.data;
      })
      .catch((error) => dispatch(getDataFailure(error)));
  };
}

export function getAlbumTracks(albumId) {
  return (dispatch) => {
    dispatch(getDataBegin());
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}`
      )
      .then((res) => {
        dispatch(getAlbumTracksSuccess(res.data));
        dispatch(getPageTitle(res.data.title));
        return res.data;
      })
      .catch((error) => dispatch(getDataFailure(error)));
  };
}

export function getArtistTracks(artistId) {
  return (dispatch) => {
    dispatch(getDataBegin());
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}/top?limit=50`
      )
      .then((res) => {
        dispatch(getArtistTracksSuccess(res.data.data));
        dispatch(getPageTitle(res.data.data[0].artist.name));
        return res.data;
      })
      .catch((error) => dispatch(getDataFailure(error)));
  };
}

export function getPlaylistTracks(playlistId) {
  return (dispatch) => {
    dispatch(getDataBegin());
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${playlistId}`
      )
      .then((res) => {
        dispatch(getPlaylistTracksSuccess(res.data));
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

export function getSearchResult(query) {
  return (dispatch) => {
    dispatch(getDataBegin());
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`
      )
      .then((res) => {
        dispatch(getSearchSuccess(res.data.data));
        dispatch(getPageTitle(`Search: ${query}`));
        return res.data.data;
      })
      .catch((error) => dispatch(getDataFailure(error)));
  };
}
