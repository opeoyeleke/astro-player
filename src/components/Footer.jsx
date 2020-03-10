import React from "react";
import ArtistImage from "./../assets/images/artist.jpg";
import { Icon } from "react-icons-kit";
import {
  ic_skip_previous,
  ic_play_arrow,
  ic_pause,
  ic_skip_next,
  ic_volume_off,
  ic_volume_mute,
  ic_volume_down,
  ic_volume_up,
  ic_repeat,
  ic_repeat_one,
  ic_shuffle
} from "react-icons-kit/md";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="artist-image-small">
          <img src={ArtistImage} alt="artist image" />
        </div>
        <div className="song-info">
          <div className="artist-name">Ne-yo</div>
          <div className="song-name">Christmas</div>
        </div>
      </div>
      <div className="footer-center">
        <div className="control-buttons">
          <Icon className="control-button" size={30} icon={ic_skip_previous} />
          <Icon className="control-button" size={30} icon={ic_pause} />
          <Icon className="control-button" size={30} icon={ic_skip_next} />
        </div>
        <div className="progress-bar"></div>
      </div>
      <div className="footer-right">
        <Icon className="control-button" size={30} icon={ic_volume_up} />
        <Icon className="control-button" size={30} icon={ic_shuffle} />
        <Icon className="control-button" size={30} icon={ic_repeat} />
      </div>
    </div>
  );
}
