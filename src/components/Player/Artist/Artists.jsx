import React, { Component } from "react";
import { getPageTitle } from "./../../../redux/data/data.actions";
import { connect } from "react-redux";

class Artists extends Component {
  componentDidMount() {
    this.props.dispatch(getPageTitle("Artists"));
  }
  render() {
    return <div className="main-container-content">Artists</div>;
  }
}

export default connect()(Artists);
