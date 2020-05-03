import React, { Component } from "react";
import { getAlbumInfo } from "./../../../redux/dataFetch";
import { connect } from "react-redux";
import Loader from "../Loader";

class AlbumInfo extends Component {
  componentDidMount() {
    this.props.dispatch(getAlbumInfo(this.props.match.params.albumId));
  }

  render() {
    console.log(this.props.album);

    return (
      <div className="album-info-container">
        ssjsjsjsj snssjsjsjsjsj sjsjsjsjsjs sjsjsjsjsjsjsj snssjsjsjsjsj
        sjsjsjsjsjs sjsjsjsjsjsjsj snssjsjsjsjsj sjsjsjsjsjs sjsjsjsjsjsjsj
        snssjsjsjsjsj sjsjsjsjsjs sjsjsjsjsjsjsj snssjsjsjsjsj sjsjsjsjsjs
        sjsjsjsjsjsjs
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  album: state.data.album,
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps)(AlbumInfo);
