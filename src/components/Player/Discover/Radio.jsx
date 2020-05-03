import React, { Component } from "react";
import { getPageTitle } from "./../../../redux/data/data.actions";
import { connect } from "react-redux";

class Radio extends Component {
  componentDidMount() {
    this.props.dispatch(getPageTitle("Radio"));
  }
  render() {
    return <div className="main-container-content">Radio</div>;
  }
}

export default connect()(Radio);
