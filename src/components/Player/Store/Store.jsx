import React, { Component } from "react";
import { getPageTitle } from "./../../../redux/data/data.actions";
import { connect } from "react-redux";

class Store extends Component {
  componentDidMount() {
    this.props.dispatch(getPageTitle("Store"));
  }
  render() {
    return <div className="main-container-content">Store</div>;
  }
}

export default connect()(Store);
