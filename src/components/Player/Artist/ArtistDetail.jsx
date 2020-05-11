import React from "react";
import { connect } from "react-redux";
import convert from "convert-seconds";
import { Icon } from "react-icons-kit";
import { ic_play_arrow, ic_play_circle_filled } from "react-icons-kit/md";
import { getTrackInfo } from "../../../redux/dataFetch";
import Loader from "./../Loader/Loader";

function ArtistDetail({ artist, getTrackInfo }) {
  if (!artist) {
    return <Loader />;
  }

  let trackNumber = 1;

  return (
    <div className="details-container">
      <div className="details-info">
        <div className="details-info-left">
          <img
            src={
              artist[0].contributors && artist[0].contributors[0].picture_medium
            }
            alt="cover"
          />
        </div>
        <div className="details-info-right">
          <div className="details-contributor">
            {artist[0].contributors && artist[0].contributors[0].name}
          </div>
          <div className="details-title"> "Top Tracks"</div>
          <div>Tracks: 50</div>
          <div className="play-button">
            <button>
              <Icon size={20} icon={ic_play_arrow} />
              Play
            </button>
          </div>
        </div>
      </div>
      <div className="details-bottom">
        <div className="details-bottom-title">Tracks</div>

        {artist.map((track) => (
          <TrackItem
            key={track.id}
            id={track.id}
            number={trackNumber++}
            title={track.title_short}
            duration={track.duration}
            artist={track.artist.name}
            trackSrc={track.preview}
            getTrackInfo={getTrackInfo}
          />
        ))}
      </div>
    </div>
  );
}

function TrackItem({ id, number, title, duration, artist, getTrackInfo }) {
  const trackDuration = convert(duration);
  return (
    <div className="track-item-container">
      <table className="track-item">
        <tbody>
          <tr key={id}>
            <td>{number}</td>
            <td>{title}</td>
            <td>{artist}</td>
            <td>
              {trackDuration.minutes < 10
                ? `0${trackDuration.minutes}`
                : trackDuration.minutes}
              :
              {trackDuration.seconds < 10
                ? `0${trackDuration.seconds}`
                : trackDuration.seconds}
            </td>
            <td>
              <Icon
                size={20}
                icon={ic_play_circle_filled}
                onClick={() => {
                  getTrackInfo(id);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getTrackInfo: (id) => dispatch(getTrackInfo(id)),
});

export default connect(null, mapDispatchToProps)(ArtistDetail);
