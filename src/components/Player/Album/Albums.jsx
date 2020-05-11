import React, { Component } from "react";
import Loader from "./../Loader/Loader";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAlbums } from "./../../../redux/dataFetch";
import { getPageTitle } from "./../../../redux/data/data.actions";
import ErrorBoundary from "./../ErrorBoundary/ErrorBoundary";

class Albums extends Component {
  componentDidMount() {
    this.props.dispatch(getPageTitle("Trending Albums"));
    if (this.props.albums === null) {
      this.props.dispatch(getAlbums());
    }
  }

  render() {
    const { error, loading, albums } = this.props;

    if (error) {
      return <ErrorBoundary message={error.message} />;
    }
    if (loading) {
      return <Loader />;
    }

    return (
      <div className="main-container-content">
        <div className="main-container-items">
          {albums &&
            albums.map((album) => (
              <AlbumItem
                key={album.id}
                id={album.id}
                image={album.cover_medium}
                title={album.title}
                artist={album.artist.name}
                match={this.props.match}
              />
            ))}
        </div>
      </div>
    );
  }
}

function AlbumItem({ match, id, image, title, artist }) {
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
  albums: state.data.albums,
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps)(Albums);
