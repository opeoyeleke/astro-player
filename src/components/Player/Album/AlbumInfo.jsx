import React, { Component } from "react";
import { getAlbumInfo } from "./../../../redux/dataFetch";
import { connect } from "react-redux";
import Loader from "../Loader";
import Details from "./../Details/Details";
import { getPageTitle } from "./../../../redux/data/data.actions";

class AlbumInfo extends Component {
  componentDidMount() {
    // eslint-disable-next-line

    if (this.props.album.id == this.props.match.params.albumId) {
      this.props.dispatch(getPageTitle(this.props.album.title));
    }
    // eslint-disable-next-line
    if (this.props.album.id != this.props.match.params.albumId) {
      this.props.dispatch(getAlbumInfo(this.props.match.params.albumId));
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

    return <Details album={album} />;
  }
}

const mapStateToProps = (state) => ({
  album: state.data.album,
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps)(AlbumInfo);
