import React from "react";
import { Link } from "react-router-dom";
import image from "./../assets/undraw_happy_music_g6wc.svg";
import github from "./../assets/mark-github.svg";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <div className="home-title">Astro Player</div>
        <div className="home-desc">
          A web-based music streaming app built with React, Redux and Deezer API
        </div>
        <button className="button-home">
          <Link to="/player/albums">Go to Player</Link>
        </button>
        <div>
          <a href="https://github.com/opeoyeleke/astro-player">
            <img src={github} alt="github logo" />
            Github
          </a>
        </div>
      </div>
      <div className="home-right">
        <img src={image} alt="music vector" />
      </div>
    </div>
  );
}
