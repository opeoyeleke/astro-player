import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Albums from "./Album/Albums";
import SongsList from "./Songs/SongsList";
import Playlists from "./Playlist/Playlists";
import Artists from "./Artist/Artists";
import Store from "./Store/Store";
import Radio from "./Discover/Radio";
import ForYou from "./Discover/ForYou";
import Header from "./Header";

export default class MainSection extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <Switch>
          <Route path="/player/albums" component={Albums} />
          <Route exact path="/player/songs" component={SongsList} />
          <Route exact path="/player/playlists" component={Playlists} />
          <Route exact path="/player/artists" component={Artists} />
          <Route exact path="/player/store" component={Store} />
          <Route exact path="/player/radio" component={Radio} />
          <Route exact path="/player/foryou" component={ForYou} />
        </Switch>
      </div>
    );
  }
}
