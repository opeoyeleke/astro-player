import React, { Component } from "react";
import convert from "convert-seconds";

export default class Progress extends Component {
  render() {
    const { currentTime, duration } = this.props;
    const currentTimeNo = currentTime && convert(currentTime);
    const durationNo = duration && convert(duration);

    return (
      <div className="progress">
        <span className="elapsed">
          {currentTimeNo
            ? currentTimeNo.minutes < 10
              ? `0${currentTimeNo.minutes}`
              : currentTimeNo.minutes
            : "0"}
          :
          {currentTimeNo
            ? currentTimeNo.seconds < 10
              ? `0${currentTimeNo.seconds}`
              : currentTimeNo.seconds
            : "00"}
        </span>
        <progress
          onClick={this.changeSeek}
          value={currentTime ? currentTime : 0}
          max={duration ? duration : 0}
          ref={this.progress}
        />
        <span className="duration">
          {durationNo
            ? durationNo.minutes < 10
              ? `0${durationNo.minutes}`
              : durationNo.minutes
            : "0"}
          :
          {durationNo
            ? durationNo.seconds < 10
              ? `0${durationNo.seconds}`
              : durationNo.seconds
            : "00"}
        </span>
      </div>
    );
  }
}
