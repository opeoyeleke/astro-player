import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "./../Loader/Loader";
import PlaylistDetail from "./PlaylistDetail";
import { getPageTitle } from "./../../../redux/data/data.actions";
import { getPlaylistTracks } from "./../../../redux/dataFetch";
import ErrorBoundary from "./../ErrorBoundary/ErrorBoundary";

class PlaylistInfo extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    if (this.props.playlist.id == this.props.match.params.playlistId) {
      this.props.dispatch(getPageTitle(this.props.playlist.title));
    } else {
      // eslint-disable-next-line
      this.props.dispatch(
        getPlaylistTracks(this.props.match.params.playlistId)
      );
    }
  }

  render() {
    const { error, loading, playlist } = this.props;

    if (error) {
      return <ErrorBoundary message={error.message} />;
    }
    if (loading) {
      return <Loader />;
    }

    return <PlaylistDetail playlist={playlist} />;
  }
}

const mapStateToProps = (state) => ({
  playlist: state.data.playlist,
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps)(PlaylistInfo);
