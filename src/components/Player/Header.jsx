import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "react-icons-kit";
import { ic_arrow_back } from "react-icons-kit/md";

class PageTitle extends Component {
  render() {
    return (
      <div className="page-title-large">
        <div className="page-title-content">
          <span className="header-nav-button">
            <Icon className="nav-icon" icon={ic_arrow_back} />
          </span>
          {this.props.title}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.data.title,
});

export default connect(mapStateToProps)(PageTitle);
