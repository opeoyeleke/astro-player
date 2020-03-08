import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Albums from "./Albums";
import SongsList from "./SongsList";
import Playlists from "./Playlists";
import Artists from "./Artists";
import Store from "./Store";
import Radio from "./Radio";
import ForYou from "./ForYou";
import Browse from "./Browse";
import PageTitle from "./PageTitle";

export default class MainSection extends Component {
  render() {
    return (
      <div className="main-container">
        <PageTitle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/songs" component={SongsList} />
          <Route exact path="/playlists" component={Playlists} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/radio" component={Radio} />
          <Route exact path="/foryou" component={ForYou} />
          <Route exact path="/browse" component={Browse} />
        </Switch>
      </div>
    );
  }
}
