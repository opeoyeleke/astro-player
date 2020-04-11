import React from "react";
import { Link } from "react-router-dom";
import Progress from "./Player/Footer/Progress";

export default function Home() {
  return (
    <div className="home-container">
      <div className="welcome">welcome</div>
      <Link to="/player/albums">Go to player</Link>
      <Progress />
    </div>
  );
}
