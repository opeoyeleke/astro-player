import React, { Component } from "react";
import { connect } from "react-redux";
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
    if (this.props.activeTrack !== prevProps.activeTrack) {
      const track = this.props.activeTrack.preview;
      if (track) {
        this.player.src = track;
        this.player.load();
        this.player.play();
        this.setState({
          isPlaying: true,
          duration: this.player.duration,
          currentTime: this.player.currentTime,
        });
      }
    }
    if (this.state.currentTime === this.state.duration) {
      const { getTrackInfo } = this.props;
      const { activeTrack, playingQueue } = this.props;
      const trackIndex = playingQueue.findIndex(
        (track) => track?.id === activeTrack?.id
      );
      if (trackIndex === playingQueue.length - 1) {
        return this.player.ended;
      } else {
        getTrackInfo(playingQueue[trackIndex + 1].id);
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

  handleNextTrack = (direction) => {
    const { getTrackInfo } = this.props;
    const { activeTrack, playingQueue } = this.props;
    const trackIndex = playingQueue.findIndex(
      (track) => track.id === activeTrack.id
    );
    if (direction === "previous") {
      if (trackIndex === 0) {
        return null;
      } else {
        getTrackInfo(playingQueue[trackIndex - 1].id);
      }
    } else if (direction === "next") {
      if (trackIndex === playingQueue.length - 1) {
        return null;
      } else {
        getTrackInfo(playingQueue[trackIndex + 1].id);
      }
    }
  };

  render() {
    const { activeTrack } = this.props;
    const { currentTime, duration } = this.state;

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
          handleNextTrack={this.handleNextTrack}
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
  playingQueue: state.track.playingQueue,
});

const mapDispatchToProps = (dispatch) => ({
  getTrackInfo: (id) => dispatch(getTrackInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
