import React, { Component } from "react";
const { DZ } = window;

export default class Progress extends Component {
  constructor() {
    super();
    this.elapsed = React.createRef();
    this.duration = React.createRef();
    this.progress = React.createRef();
  }

  convertTime = (time) => {
    let min = Math.floor(time / 60);
    let s = Math.floor(time % 60);
    return `${min}:${(s < 10 ? "0" : "") + s}`;
  };

  showPosition = () => {
    DZ &&
      DZ.Event.subscribe("player_position", (e) => {
        if (
          this.elapsed.current &&
          this.duration.current &&
          this.progress.current
        ) {
          this.elapsed.current.textContent = this.convertTime(e[0]);
          this.duration.current.textContent = this.convertTime(e[1]);
          e[1] && this.progress.current.setAttribute("value", e[0] / e[1]);
        }
      });
  };

  changeSeek = ({ target, clientX }) => {
    const { x, width } = target.getBoundingClientRect();
    DZ && DZ.player.seek(((clientX - x) / width) * 100);
  };

  componentDidMount() {
    this.showPosition();
  }

  render() {
    return (
      <div className="progress">
        <span className="elapsed" ref={this.elapsed}>
          0:00
        </span>
        <progress
          onClick={this.changeSeek}
          value={0}
          max={1}
          ref={this.progress}
        />
        <span className="duration" ref={this.duration}>
          0:00
        </span>
      </div>
    );
  }
}
