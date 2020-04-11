import React, { Component } from "react";
import TrackInfo from "./TrackInfo";
import Controls from "./Controls";
import Volume_Repeat from "./Volume_Repeat";

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
        <Volume_Repeat
          repeatTracks={this.state.repeatTracks}
          changeRepeat={this.changeRepeat}
        />
      </div>
    );
  }
}

export default Footer;
