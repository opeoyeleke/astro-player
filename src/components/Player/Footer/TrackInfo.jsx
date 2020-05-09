import React from "react";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_up } from "react-icons-kit/md";

function TrackInfo(props) {
  const { trackName, trackArtist, trackImage } = props;

  return (
    <div className="footer-left">
      <div className="artist-image-small">
        <img
          src={
            trackImage
              ? trackImage
              : "https://img.icons8.com/officel/80/000000/person-male.png"
          }
          alt="artistimage"
        />
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

export default TrackInfo;
