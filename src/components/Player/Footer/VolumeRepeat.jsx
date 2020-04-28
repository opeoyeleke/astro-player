import React from "react";
import { Icon } from "react-icons-kit";
import {
  ic_volume_mute,
  ic_volume_up,
  ic_repeat,
  ic_repeat_one,
} from "react-icons-kit/md";
import { connect } from "react-redux";

import { muteUnmute } from "../../../redux/track/track.actions";

function VolumeRepeat(props) {
  const { muteSound, muteUnmute, repeatTracks, changeRepeat } = props;

  return (
    <div className="footer-right">
      {muteSound ? (
        <Icon
          className="control-button"
          size={30}
          icon={ic_volume_mute}
          onClick={() => {
            muteUnmute();
          }}
        />
      ) : (
        <Icon
          className="control-button"
          size={30}
          icon={ic_volume_up}
          onClick={() => {
            muteUnmute();
          }}
        />
      )}
      {repeatTracks ? (
        <Icon
          className="control-button"
          size={30}
          icon={ic_repeat}
          onClick={() => {
            changeRepeat();
          }}
        />
      ) : (
        <Icon
          className="control-button"
          size={30}
          icon={ic_repeat_one}
          onClick={() => {
            changeRepeat();
          }}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  muteSound: state.track.muteSound,
});

const mapDispatchToProps = (dispatch) => ({
  muteUnmute: () => dispatch(muteUnmute()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VolumeRepeat);
