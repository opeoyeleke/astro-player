import React, { Component } from "react";
import { connect } from "react-redux";
import convert from "convert-seconds";

import TrackInfo from "./TrackInfo";
import Controls from "./Controls";
import VolumeRepeat from "./VolumeRepeat";
import { getTrackInfo } from "../../../redux/dataFetch";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      repeatTracks: true,
      muteSound: false,
      isPlaying: false,
      currentTime: null,
      duration: null,
    };
  }

  componentDidMount() {
    this.props.dispatch(getTrackInfo(919708552));
    this.player.addEventListener("timeupdate", (e) => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration,
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.activeTrack);
    if (this.props.activeTrack !== prevProps.activeTrack) {
      const track = this.props.activeTrack.preview;
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({
          isPlaying: true,
          duration: this.player.duration,
          currentTime: this.player.currentTime,
        });
      }
    }
  }

  changeIsPlaying = () => {
    if (this.state.isPlaying) {
      this.player.pause();
    } else {
      this.player.play();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  changeRepeat = () => {
    this.setState({ repeatTracks: !this.state.repeatTracks });
  };

  changeMute = () => {
    this.player.muted = !this.player.muted;
    this.setState({ muteSound: !this.state.muteSound });
  };

  render() {
    const { activeTrack } = this.props;
    const currentTime =
      this.state.currentTime && convert(this.state.currentTime);
    const duration = this.state.duration && convert(this.state.duration);

    return (
      <div className="footer-container">
        <TrackInfo
          trackImage={activeTrack && activeTrack.album.cover_small}
          trackName={activeTrack && activeTrack.title_short}
          trackArtist={activeTrack && activeTrack.artist.name}
        />
        <Controls
          isPlaying={this.state.isPlaying}
          changeIsPlaying={this.changeIsPlaying}
          currentTime={currentTime}
          duration={duration}
        />
        <VolumeRepeat
          repeatTracks={this.state.repeatTracks}
          changeRepeat={this.changeRepeat}
          muteSound={this.state.muteSound}
          changeMute={this.changeMute}
        />
        <audio ref={(ref) => (this.player = ref)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTrack: state.track.activeTrack,
});

export default connect(mapStateToProps)(Footer);
