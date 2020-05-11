import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Albums from "./Album/Albums";
import TrackList from "./Tracks/TrackList";
import Playlists from "./Playlist/Playlists";
import Artists from "./Artist/Artists";
import Header from "./Header/Header";
import AlbumInfo from "./Album/AlbumInfo";
import ArtistInfo from "./Artist/ArtistInfo";
import PlaylistInfo from "./Playlist/PlaylistInfo";
import Search from "./Search/Search";

export default class MainSection extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <Switch>
          <Route exact path={`/player/albums/:albumId`} component={AlbumInfo} />
          <Route
            exact
            path={`/player/playlists/:playlistId`}
            component={PlaylistInfo}
          />
          <Route
            exact
            path={`/player/artists/:artistId`}
            component={ArtistInfo}
          />
          <Route exact path="/player/albums" component={Albums} />
          <Route exact path="/player/tracks" component={TrackList} />
          <Route exact path="/player/playlists" component={Playlists} />
          <Route exact path="/player/artists" component={Artists} />
          <Route exact path="/player/search" component={Search} />
        </Switch>
      </div>
    );
  }
}
