import React from "react";
import { Icon } from "react-icons-kit";
import {
  ic_volume_mute,
  ic_volume_up,
  ic_repeat,
  ic_repeat_one,
} from "react-icons-kit/md";

function VolumeRepeat(props) {
  const { muteSound, changeMute, repeatTracks, changeRepeat } = props;

  return (
    <div className="footer-right">
      {muteSound ? (
        <Icon
          className="control-button"
          size={30}
          icon={ic_volume_mute}
          onClick={() => {
            changeMute();
          }}
        />
      ) : (
        <Icon
          className="control-button"
          size={30}
          icon={ic_volume_up}
          onClick={() => {
            changeMute();
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

export default VolumeRepeat;
