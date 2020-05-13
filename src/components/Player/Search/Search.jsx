import React, { Component } from "react";
import Loader from "./../Loader/Loader";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_search } from "react-icons-kit/md";
import { connect } from "react-redux";
import { getTrackInfo } from "../../../redux/dataFetch";
import { getPageTitle } from "./../../../redux/data/data.actions";
import ErrorBoundary from "./../ErrorBoundary/ErrorBoundary";
import { getSearchResult } from "./../../../redux/dataFetch";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    this.props.getSearchResult(this.state.value);
    this.setState({ value: "" });
    this.props.history.push("/player/search");
    e.preventDefault();
  };

  componentDidMount() {
    this.props.getPageTitle("Search");
  }

  render() {
    const { error, loading, result, getTrackInfo } = this.props;

    if (error) {
      return <ErrorBoundary message={error.message} />;
    }
    if (loading) {
      return <Loader />;
    }

    return (
      <div className="main-container-content">
        <div className="mobile-search">
          <div className="wrap">
            <form className="search" onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="search-term"
                placeholder="Arrists, tracks..."
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button type="submit" className="search-button">
                <Icon className="search-icon" icon={ic_search} />
              </button>
            </form>
          </div>
        </div>
        <div className="main-container-items">
          {result &&
            result.map((track) => (
              <SearchItem
                key={track.id}
                id={track.id}
                image={track.album.cover_medium}
                title={track.title}
                artist={track.artist.name}
                getTrackInfo={getTrackInfo}
                albumId={track.album.id}
                artistId={track.artist.id}
              />
            ))}
        </div>
        {/* <div className="load-more">
          {result ? <button className="custom-button">Load More</button> : null}
        </div> */}
      </div>
    );
  }
}

function SearchItem({
  id,
  image,
  title,
  artist,
  getTrackInfo,
  albumId,
  artistId,
}) {
  return (
    <div className="main-container-item-container">
      <div className="image-container">
        <Link to={`/player/albums/${albumId}`}>
          <img src={image} alt="album cover" />
        </Link>
      </div>
      <div className="info">
        <div className="title">
          <Link to={`/player/albums/${albumId}`}>{title}</Link>
        </div>
        <div className="artist">
          <Link to={`/player/artists/${artistId}`}>{artist}</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  result: state.search.searchResult,
  loading: state.search.loading,
  error: state.search.error,
});

const mapDispatchToProps = (dispatch) => ({
  getTrackInfo: (id) => dispatch(getTrackInfo(id)),
  getPageTitle: (title) => dispatch(getPageTitle(title)),
  getSearchResult: (query) => dispatch(getSearchResult(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
