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

function Volume_Repeat(props) {
  const { muteSound, muteUnmute } = props;

  return (
    <div className="footer-right">
      {muteSound ? (
        <Icon
          className="control-button"
          size={30}
          icon={ic_volume_mute}
          onClick={() => {
            muteUnmute(false);
          }}
        />
      ) : (
        <Icon
          className="control-button"
          size={30}
          icon={ic_volume_up}
          onClick={() => {
            muteUnmute(true);
          }}
        />
      )}
      <Icon className="control-button" size={30} icon={ic_repeat_one} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  muteSound: state.track.muteSound,
});

const mapDispatchToProps = (dispatch) => ({
  muteUnmute: (Boolean) => dispatch(muteUnmute(Boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Volume_Repeat);
