import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Player from "./components/Player/Player";
import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <div className="home-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/player" component={Player} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
