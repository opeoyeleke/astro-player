import React, { Component } from "react";
import { getPageTitle } from "./../../../redux/data/data.actions";
import { connect } from "react-redux";

class ForYou extends Component {
  componentDidMount() {
    this.props.dispatch(getPageTitle("For You"));
  }
  render() {
    return <div className="main-container-content">For You</div>;
  }
}

export default connect()(ForYou);
