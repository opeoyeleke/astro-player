import React from "react";
import { Icon } from "react-icons-kit";
import {
  ic_skip_previous,
  ic_play_arrow,
  ic_pause,
  ic_skip_next,
} from "react-icons-kit/md";
import { connect } from "react-redux";

import { playPause } from "../../../redux/track/track.actions";

function Controls(props) {
  const { isPlaying, playPause } = props;

  return (
    <div className="footer-center">
      <div className="control-buttons">
        <Icon className="control-button" size={30} icon={ic_skip_previous} />
        {isPlaying ? (
          <Icon
            className="control-button"
            size={30}
            icon={ic_pause}
            onClick={() => {
              playPause(false);
            }}
          />
        ) : (
          <Icon
            className="control-button"
            size={30}
            icon={ic_play_arrow}
            onClick={() => {
              playPause(true);
            }}
          />
        )}
        <Icon className="control-button" size={30} icon={ic_skip_next} />
      </div>
      <div className="progress-bar">
        <input type="range" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isPlaying: state.track.isPlaying,
});

const mapDispatchToProps = (dispatch) => ({
  playPause: (Boolean) => dispatch(playPause(Boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
