import React, { Component } from "react";
import { getPageTitle } from "./../../../redux/data/data.actions";
import { connect } from "react-redux";

class Playlists extends Component {
  componentDidMount() {
    this.props.dispatch(getPageTitle("Playlists"));
  }
  render() {
    return <div className="main-container-content">Playlists</div>;
  }
}

export default connect()(Playlists);
