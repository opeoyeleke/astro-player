import React, { Component } from "react";
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
    return (
      <div className="footer-container">
        <TrackInfo />
        <Controls />
        <VolumeRepeat
          repeatTracks={this.state.repeatTracks}
          changeRepeat={this.changeRepeat}
        />
      </div>
    );
  }
}

export default Footer;
