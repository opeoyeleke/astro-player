import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Player from "./components/Player/Player";

function App() {
  return (
    <div className="home-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/player" component={Player} />
      </Switch>
    </div>
  );
}

export default App;
