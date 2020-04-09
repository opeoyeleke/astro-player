import React from "react";
import { connect } from "react-redux";

import ArtistImage from "./../../../assets/images/artist.jpg";

function TrackInfo(props) {
  const { trackName, trackImage, trackArtist } = props;

  return (
    <div className="footer-left">
      <div className="artist-image-small">
        <img src={ArtistImage} alt="artistimage" />
      </div>
      <div className="song-info">
        <div className="artist-name">{trackArtist}</div>
        <div className="song-name">{trackName}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  trackImage: state.track.trackImage,
  trackName: state.track.trackName,
  trackArtist: state.track.trackArtist,
});

export default connect(mapStateToProps)(TrackInfo);
