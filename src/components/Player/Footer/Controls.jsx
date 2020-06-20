import React from "react";
import { Icon } from "react-icons-kit";
import {
  ic_skip_previous,
  ic_play_arrow,
  ic_pause,
  ic_skip_next,
} from "react-icons-kit/md";

import Progress from "./Progress";

function Controls(props) {
  const {
    isPlaying,
    changeIsPlaying,
    handleNextTrack,
    duration,
    currentTime,
  } = props;

  return (
    <div className="footer-center">
      <div className="control-buttons">
        <Icon
          className="control-button"
          size={30}
          icon={ic_skip_previous}
          onClick={() => {
            handleNextTrack("previous");
          }}
        />
        {isPlaying ? (
          <Icon
            className="control-button"
            size={30}
            icon={ic_pause}
            onClick={() => {
              changeIsPlaying();
            }}
          />
        ) : (
          <Icon
            className="control-button"
            size={30}
            icon={ic_play_arrow}
            onClick={() => {
              changeIsPlaying();
            }}
          />
        )}
        <Icon
          className="control-button"
          size={30}
          icon={ic_skip_next}
          onClick={() => {
            handleNextTrack("next");
          }}
        />
      </div>
      <div className="progress-bar">
        <Progress currentTime={currentTime} duration={duration} />
      </div>
    </div>
  );
}

export default Controls;
