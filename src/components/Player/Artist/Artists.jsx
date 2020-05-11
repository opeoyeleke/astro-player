import React, { Component } from "react";
import Loader from "./../Loader/Loader";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getArtists } from "./../../../redux/dataFetch";
import { getPageTitle } from "./../../../redux/data/data.actions";
import ErrorBoundary from "./../ErrorBoundary/ErrorBoundary";

class Artists extends Component {
  componentDidMount() {
    this.props.dispatch(getPageTitle("Popular Artists"));
    if (this.props.artists === null) {
      this.props.dispatch(getArtists());
    }
  }

  render() {
    const { error, loading, artists } = this.props;

    if (error) {
      return <ErrorBoundary message={error.message} />;
    }
    if (loading) {
      return <Loader />;
    }

    return (
      <div className="main-container-content">
        <div className="main-container-items">
          {artists &&
            artists.map((artist) => (
              <ArtistItem
                key={artist.id}
                id={artist.id}
                image={artist.picture_medium}
                artist={artist.name}
                match={this.props.match}
              />
            ))}
        </div>
      </div>
    );
  }
}

function ArtistItem({ match, id, image, artist }) {
  return (
    <div className="main-container-item-container">
      <div className="image-container">
        <Link to={`${match.url}/${id}`}>
          <img src={image} alt="cover" />
        </Link>
      </div>
      <div className="info">
        <div className="artist">{artist}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  artists: state.data.artists,
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps)(Artists);
