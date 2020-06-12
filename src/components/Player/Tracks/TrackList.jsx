import React, { Component } from "react";
import Loader from "./../Loader/Loader";
import { connect } from "react-redux";
import { getTracks } from "./../../../redux/dataFetch";
import { getPageTitle } from "./../../../redux/data/data.actions";
import { getTrackInfo } from "../../../redux/dataFetch";
import { setPlayingQueue } from "./../../../redux/track/track.actions";
import ErrorBoundary from "./../ErrorBoundary/ErrorBoundary";

class TrackList extends Component {
  componentDidMount() {
    this.props.getPageTitle("Recommended Releases");
    if (this.props.tracks === null) {
      this.props.getTracks();
    }
  }

  render() {
    const { error, loading, tracks, getTrackQueue } = this.props;

    if (error) {
      return <ErrorBoundary message={error.message} />;
    }
    if (loading) {
      return <Loader />;
    }
    return (
      <div className="main-container-content">
        <div className="main-container-items">
          {tracks &&
            tracks.map((track) => (
              <TrackItem
                key={track.id}
                id={track.id}
                image={track.album.cover_medium}
                title={track.title}
                artist={track.artist.name}
                getTrackQueue={getTrackQueue}
                playQueue={tracks}
              />
            ))}
        </div>
      </div>
    );
  }
}

function TrackItem({ id, image, title, artist, getTrackQueue, playQueue }) {
  return (
    <div className="main-container-item-container">
      <div className="image-container">
        <img
          src={image}
          alt="album cover"
          onClick={() => {
            getTrackQueue(id, playQueue);
          }}
        />
      </div>
      <div className="info">
        <div className="title">{title}</div>
        <div className="artist">{artist}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tracks: state.data.tracks,
  loading: state.data.loading,
  error: state.data.error,
});

const mapDispatchToProps = (dispatch) => ({
  getTrackQueue: (id, playQueue) => {
    dispatch(getTrackInfo(id));
    dispatch(setPlayingQueue(playQueue));
  },
  getPageTitle: (title) => dispatch(getPageTitle(title)),
  getTracks: () => dispatch(getTracks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
