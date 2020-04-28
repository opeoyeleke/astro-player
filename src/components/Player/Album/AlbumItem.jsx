import React from "react";

export default function AlbumItem({ image, title, artist }) {
  return (
    <div className="album-item-container">
      <div className="image-container">
        <img src={image} alt="album cover" />
      </div>
      <div className="info">
        <div className="artist">{artist}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
}
