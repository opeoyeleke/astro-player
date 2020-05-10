import React from "react";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_up } from "react-icons-kit/md";
import image from "../../../assets/person.svg";

function TrackInfo(props) {
  const { trackName, trackArtist, trackImage } = props;

  return (
    <div className="footer-left">
      <div className="artist-image-small">
        <img src={trackImage ? trackImage : image} alt="artistimage" />
      </div>
      <div className="track-info">
        <div className="footer-button-mobile">
          <Icon icon={ic_keyboard_arrow_up} />
        </div>
        <div className="artist-name">{trackArtist ? trackArtist : "----"}</div>
        <div className="track-name">{trackName ? trackName : "----"}</div>
      </div>
    </div>
  );
}

export default TrackInfo;
