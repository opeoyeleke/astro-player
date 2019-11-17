import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Albums from "./components/Albums";
import SongsList from "./components/SongsList";
import Playlists from "./components/Playlists";
import Artists from "./components/Artists";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Switch>
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/songs" component={SongsList} />
        <Route exact path="/playlists" component={Playlists} />
        <Route exact path="/artists" component={Artists} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
