import React, { Component } from "react";
import axios from "axios";
import Loader from "./../Loader";

export default class Albums extends Component {
  constructor() {
    super();
    this.state = {
      albums: null,
    };
  }

  componentDidMount() {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/`)
      .then((res) => {
        const albums = res.data.albums.data;
        this.setState({ albums });
        console.log(this.state.albums);
      });
  }

  render() {
    function AlbumItem({ image, title, artist }) {
      return (
        <div className="album-item-container">
          <div className="image-container">
            <img src={image} alt="album cover" />
          </div>
          <div className="info">
            <div className="title">{title}</div>
            <div className="artist">{artist}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="main-container-content">
        <div className="album-items">
          {this.state.albums ? (
            this.state.albums.map((album) => (
              <AlbumItem
                key={album.id}
                image={album.cover_medium}
                title={album.title}
                artist={album.artist.name}
              />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}
