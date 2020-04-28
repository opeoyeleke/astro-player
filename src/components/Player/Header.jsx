import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { ic_arrow_back } from "react-icons-kit/md";

export default class PageTitle extends Component {
  render() {
    return (
      <div className="page-title-large">
        <div className="page-title-content">
          <span className="header-nav-button">
            <Icon className="nav-icon" icon={ic_arrow_back} />
          </span>
          Albums
        </div>
      </div>
    );
  }
}
