import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../Loader";
import AlbumDetail from "./AlbumDetail";
import { getPageTitle } from "./../../../redux/data/data.actions";
import { getAlbumTracks } from "./../../../redux/dataFetch";

class AlbumInfo extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    if (this.props.album.id == this.props.match.params.albumId) {
      this.props.dispatch(getPageTitle(this.props.album.title));
    } else {
      // eslint-disable-next-line
      this.props.dispatch(getAlbumTracks(this.props.match.params.albumId));
    }
  }

  render() {
    const { error, loading, album } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (loading) {
      return <Loader />;
    }

    return <AlbumDetail album={album} />;
  }
}

const mapStateToProps = (state) => ({
  album: state.data.album,
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps)(AlbumInfo);
