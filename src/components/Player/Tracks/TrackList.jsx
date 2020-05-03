import React, { Component } from "react";
import { getPageTitle } from "./../../../redux/data/data.actions";
import { connect } from "react-redux";

class TrackList extends Component {
  componentDidMount() {
    this.props.dispatch(getPageTitle("Tracks"));
  }
  render() {
    return <div className="main-container-content">Tracks</div>;
  }
}

export default connect()(TrackList);
