import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Icon } from "react-icons-kit";
import { ic_arrow_back, ic_search } from "react-icons-kit/md";
import { getSearchResult } from "./../../../redux/dataFetch";

class PageTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    this.props.dispatch(getSearchResult(this.state.value));
    this.setState({ value: "" });
    this.props.history.push("/player/search");
    e.preventDefault();
  };

  render() {
    return (
      <div className="page-title-large">
        <div className="page-title-content">
          <span
            className="header-nav-button"
            onClick={this.props.history.goBack}
          >
            <Icon className="nav-icon" icon={ic_arrow_back} />
          </span>
          {this.props.title}
        </div>
        <div className="wrap">
          <form className="search" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="search-term"
              placeholder="Artists, tracks..."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit" className="search-button">
              <Icon className="search-icon" icon={ic_search} />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.data.title,
});

export default withRouter(connect(mapStateToProps)(PageTitle));
