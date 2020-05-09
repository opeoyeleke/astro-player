import React, { Component } from "react";
import Loader from "./../Loader";
import { connect } from "react-redux";
import { getTracks } from "./../../../redux/dataFetch";
import { getPageTitle } from "./../../../redux/data/data.actions";
import { getTrackInfo } from "../../../redux/dataFetch";

class TrackList extends Component {
  componentDidMount() {
    this.props.getPageTitle("Recommended Releases");
    if (this.props.tracks === null) {
      this.props.getTracks();
    }
  }

  render() {
    const { error, loading, tracks, getTrackInfo } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
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
                getTrackInfo={getTrackInfo}
              />
            ))}
        </div>
      </div>
    );
  }
}

function TrackItem({ getTrackInfo, id, image, title, artist }) {
  return (
    <div className="main-container-item-container">
      <div className="image-container">
        <img
          src={image}
          alt="album cover"
          onClick={() => {
            getTrackInfo(id);
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
  getTrackInfo: (id) => dispatch(getTrackInfo(id)),
  getPageTitle: (title) => dispatch(getPageTitle(title)),
  getTracks: () => dispatch(getTracks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
