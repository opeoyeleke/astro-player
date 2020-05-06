import React from "react";
import { Icon } from "react-icons-kit";
import {
  ic_skip_previous,
  ic_play_arrow,
  ic_pause,
  ic_skip_next,
} from "react-icons-kit/md";
import { connect } from "react-redux";

import { setPlayPause } from "../../../redux/track/track.actions";
import Progress from "./Progress";
import testAudio from "./../../../assets/test_audio.mp3";

function Controls(props) {
  const { isPlaying, setPlayPause, activeTrack } = props;

  let audioSrc =
    "https://cdns-preview-2.dzcdn.net/stream/c-2b76346512f4b8b3af0a6e3ac9489d42-4.mp3";

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
              setPlayPause();
            }}
          />
        ) : (
          <Icon
            className="control-button"
            size={30}
            icon={ic_play_arrow}
            onClick={() => {
              setPlayPause();
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
        <source src={audioSrc}></source>
      </audio>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isPlaying: state.track.isPlaying,
  activeTrack: state.track.activeTrack,
});

const mapDispatchToProps = (dispatch) => ({
  setPlayPause: () => dispatch(setPlayPause()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
