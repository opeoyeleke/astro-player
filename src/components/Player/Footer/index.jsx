import React, { Component } from "react";
import { connect } from "react-redux";

import TrackInfo from "./TrackInfo";
import Controls from "./Controls";
import VolumeRepeat from "./VolumeRepeat";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      repeatTracks: true,
      muteSound: false,
    };
  }

  changeRepeat = () => {
    this.setState({ repeatTracks: !this.state.repeatTracks });
  };

  render() {
    const { activeTrack } = this.props;

    return (
      <div className="footer-container">
        <TrackInfo />
        <Controls activeTrack={activeTrack} />
        <VolumeRepeat
          repeatTracks={this.state.repeatTracks}
          changeRepeat={this.changeRepeat}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTrack: state.track.activeTrack,
});

export default connect(mapStateToProps)(Footer);
