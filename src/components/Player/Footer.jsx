import React from "react";
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
import { connect } from "react-redux";

import ArtistImage from "./../../assets/images/artist.jpg";
import { playPause } from "./../../redux/track/track.actions";

function Footer(props) {
  const { isPlaying, playPause } = props;

  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="artist-image-small">
          <img src={ArtistImage} alt="artistimage" />
        </div>
        <div className="song-info">
          <div className="artist-name">Ne-yo</div>
          <div className="song-name">Christmas</div>
        </div>
      </div>
      <div className="footer-center">
        <div className="control-buttons">
          <Icon className="control-button" size={30} icon={ic_skip_previous} />
          {isPlaying ? (
            <Icon
              className="control-button"
              size={30}
              icon={ic_pause}
              onClick={playPause(false)}
            />
          ) : (
            <Icon
              className="control-button"
              size={30}
              icon={ic_play_arrow}
              onClick={playPause(true)}
            />
          )}
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

const mapStateToProps = state => ({
  isPlaying: state.track.isPlaying
});

const mapDispatchToProps = dispatch => ({
  playPause: playingStatus => dispatch(playPause(playingStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
