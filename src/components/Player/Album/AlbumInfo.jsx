import React, { Component } from "react";
import { getAlbumInfo } from "./../../../redux/dataFetch";
import { connect } from "react-redux";
import Loader from "../Loader";
import { getPageTitle } from "../../../redux/data/data.actions";

class AlbumInfo extends Component {
  componentDidMount() {
    this.props.dispatch(getAlbumInfo(this.props.match.params.albumId));
  }

  // componentDidUpdate() {
  //   this.props.dispatch(getPageTitle(this.props.album.title));
  // }

  render() {
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
