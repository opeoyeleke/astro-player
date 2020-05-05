import React from "react";
import { connect } from "react-redux";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_up } from "react-icons-kit/md";

import ArtistImage from "./../../../assets/images/artist.jpg";

function TrackInfo(props) {
  const { trackName, trackArtist } = props;

  return (
    <div className="footer-left">
      <div className="artist-image-small">
        <img src={ArtistImage} alt="artistimage" />
      </div>
      <div className="track-info">
        <div className="footer-button-mobile">
          <Icon icon={ic_keyboard_arrow_up} />
        </div>
        <div className="artist-name">{trackArtist}</div>
        <div className="track-name">{trackName}</div>
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
