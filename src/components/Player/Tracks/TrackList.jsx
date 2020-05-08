import React, { Component } from "react";
import Loader from "./../Loader";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTracks } from "./../../../redux/dataFetch";
import { getPageTitle } from "./../../../redux/data/data.actions";

class TrackList extends Component {
  componentDidMount() {
    this.props.dispatch(getPageTitle("Recommended Releases"));
    if (this.props.tracks === null) {
      this.props.dispatch(getTracks());
    }
  }

  render() {
    const { error, loading, tracks } = this.props;

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
                match={this.props.match}
              />
            ))}
        </div>
      </div>
    );
  }
}

function TrackItem({ match, id, image, title, artist }) {
  return (
    <div className="main-container-item-container">
      <div className="image-container">
        <Link to={`${match.url}/${id}`}>
          <img src={image} alt="album cover" />
        </Link>
      </div>
      <div className="info">
        <div className="title">
          <Link to={`${match.url}/${id}`}>{title}</Link>
        </div>
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

export default connect(mapStateToProps)(TrackList);
