import React, { Component } from "react";
import { getAlbumInfo } from "./../../../redux/dataFetch";
import { connect } from "react-redux";
import Loader from "../Loader";
import Details from "./../Details/Details";

class AlbumInfo extends Component {
  componentDidMount() {
    this.props.dispatch(getAlbumInfo(this.props.match.params.albumId));
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
