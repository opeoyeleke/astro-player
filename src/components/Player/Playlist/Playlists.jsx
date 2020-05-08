import React, { Component } from "react";
import Loader from "./../Loader";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPlaylists } from "./../../../redux/dataFetch";
import { getPageTitle } from "./../../../redux/data/data.actions";

class Playlists extends Component {
  componentDidMount() {
    this.props.dispatch(getPageTitle("Recommended Playlists"));
    if (this.props.playlists === null) {
      this.props.dispatch(getPlaylists());
    }
  }

  render() {
    const { error, loading, playlists } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (loading) {
      return <Loader />;
    }

    return (
      <div className="main-container-content">
        <div className="main-container-items">
          {playlists &&
            playlists.map((playlist) => (
              <PlaylistItem
                key={playlist.id}
                id={playlist.id}
                image={playlist.picture_medium}
                title={playlist.title}
                artist={playlist.user.name}
                match={this.props.match}
              />
            ))}
        </div>
      </div>
    );
  }
}

function PlaylistItem({ match, id, image, title, artist }) {
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
  playlists: state.data.playlists,
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps)(Playlists);
