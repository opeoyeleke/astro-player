import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="welcome">welcome</div>
      <Link to="/player">Go to player</Link>
    </div>
  );
}
