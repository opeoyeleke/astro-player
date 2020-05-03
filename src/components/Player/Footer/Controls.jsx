import React from "react";
import { Icon } from "react-icons-kit";
import {
  ic_skip_previous,
  ic_play_arrow,
  ic_pause,
  ic_skip_next,
} from "react-icons-kit/md";
import { connect } from "react-redux";

import { changeIsPlaying } from "../../../redux/track/track.actions";
import Progress from "./Progress";
import testAudio from "./../../../assets/test_audio.mp3";

function Controls(props) {
  const { isPlaying, changeIsPlaying } = props;

  // function playAudio() {
  //   const audioFile = document.getElementsByClassName("audio-element")[0];
  //   audioFile.play();
  // }

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
        <Icon className="control-button" size={30} icon={ic_skip_next} />
      </div>
      <div className="progress-bar">
        <Progress />
      </div>
      <audio className="audio-element">
        <source src={testAudio}></source>
      </audio>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isPlaying: state.track.isPlaying,
});

const mapDispatchToProps = (dispatch) => ({
  changeIsPlaying: () => dispatch(changeIsPlaying()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
