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

  function playAudio() {
    const audioFile = document.getElementsByClassName("audio-element")[0];
    audioFile.play();
  }

  function pauseAudio() {
    const audioFile = document.getElementsByClassName("audio-element")[0];
    audioFile.pause();
  }
  return (
    <div className="footer-center">
      <div className="control-buttons">
        <Icon
          className="control-button"
          size={30}
          icon={ic_skip_previous}
          onClick={() => {
            playAudio();
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
            pauseAudio();
          }}
        />
      </div>
      <div className="progress-bar">
        <Progress />
      </div>
      <audio className="audio-element">
        <source src="https://cdns-preview-3.dzcdn.net/stream/c-347595842cfc701bf3610f56c31a6b39-4.mp3"></source>
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
