import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../Loader";
import ArtistDetail from "./ArtistDetail";
import { getPageTitle } from "./../../../redux/data/data.actions";
import { getArtistTracks } from "./../../../redux/dataFetch";

class ArtistInfo extends Component {
  componentDidMount() {
    if (
      this.props.artist &&
      // eslint-disable-next-line
      this.props.artist[0].artist.id == this.props.match.params.artistId
    ) {
      this.props.dispatch(getPageTitle(this.props.artist[0].artist.name));
    } else {
      this.props.dispatch(getArtistTracks(this.props.match.params.artistId));
    }
  }

  render() {
    const { error, loading, artist } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (loading) {
      return <Loader />;
    }

    return <ArtistDetail artist={artist} />;
  }
}

const mapStateToProps = (state) => ({
  artist: state.data.artist,
  loading: state.data.loading,
  error: state.data.error,
});

export default connect(mapStateToProps)(ArtistInfo);
