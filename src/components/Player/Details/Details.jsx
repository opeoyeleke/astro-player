import React from "react";
import { connect } from "react-redux";
import Loader from "./../Loader";

function Details({ album }) {
  if (!album) {
    return <Loader />;
  }

  return (
    <div className="details-container">
      <div className="details-info">
        <div className="details-info-left">
          <div className="details-contributor">
            {album.artist && album.artist.name}
          </div>
          <div className="details-title">{album.title}</div>
        </div>
        <div className="details-info-right">
          <img src={album.cover_medium} alt="cover" />
        </div>
      </div>
      <div className="details-bottom">
        {album.tracks &&
          album.tracks.data.map((track) => (
            <TrackItem
              key={track.id}
              id={track.id}
              title={track.title_short}
              duration={track.duration}
              artist={track.artist.name}
              trackSrc={track.preview}
            />
          ))}
      </div>
    </div>
  );
}

function TrackItem({ image, title, duration, artist, trackSrc }) {
  return (
    <div className="track-item-container">
      <ul className="track-item"></ul>
      <li>{image}</li>
      <li>{title}</li>
      <li>{duration}</li>
      <li>{artist}</li>
    </div>
  );
}

export default connect()(Details);
