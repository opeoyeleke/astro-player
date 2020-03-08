import React, { Component } from "react";
import { Consumer } from "../Context";

export default class PageTitle extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return <div>hello</div>;
        }}
      </Consumer>
    );
  }
}
