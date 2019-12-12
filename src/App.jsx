import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Albums from "./components/Albums";
import SongsList from "./components/SongsList";
import Playlists from "./components/Playlists";
import Artists from "./components/Artists";
import Store from "./components/Store";
import Radio from "./components/Radio";
import ForYou from "./components/ForYou";
import Browse from "./components/Browse";
import Footer from "./components/Footer";
import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <div className="app-container">
        <NavBar />
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
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
