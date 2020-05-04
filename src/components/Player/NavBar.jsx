import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { slide as Menu } from "react-burger-menu";
import {
  ic_person,
  ic_music_note,
  ic_album,
  ic_queue_music,
  ic_radio,
  ic_favorite,
  ic_stars,
} from "react-icons-kit/md";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleMenuChange = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="navbar-container">
        <div className="top-nav">
          <div className="nav-item">
            <span className="nav-title">LIBRARY</span>
          </div>
          <div className="nav-item">
            <NavLink to="/player/playlists" activeClassName="active">
              <Icon className="nav-icon" icon={ic_queue_music} />
              Playlists
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/player/artists" activeClassName="active">
              <Icon className="nav-icon" icon={ic_person} />
              Artists
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/player/albums" activeClassName="active">
              <Icon className="nav-icon" icon={ic_album} />
              Albums
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/player/tracks" activeClassName="active">
              <Icon className="nav-icon" icon={ic_music_note} />
              Tracks
            </NavLink>
          </div>
        </div>
        <div className="bottom-nav">
          <div className="nav-item">
            <span className="nav-title">DISCOVER</span>
          </div>
          <div className="nav-item">
            <NavLink to="/player/store" activeClassName="active">
              <Icon className="nav-icon" icon={ic_stars} />
              Store
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/player/radio" activeClassName="active">
              <Icon className="nav-icon" icon={ic_radio} />
              Radio
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/player/foryou" activeClassName="active">
              <Icon className="nav-icon" icon={ic_favorite} />
              For You
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/" activeClassName="" className="home-button">
              Home
            </NavLink>
          </div>
        </div>

        <div className="mobile-menu">
          <Menu
            width={249}
            isOpen={this.state.isOpen}
            onStateChange={() => {
              this.setState({ isOpen: true });
            }}
          >
            <div className="nav-item">
              <span className="nav-title">LIBRARY</span>
            </div>
            <div
              className="nav-item"
              onClick={() => {
                this.handleMenuChange();
              }}
            >
              <NavLink to="/player/playlists" activeClassName="active">
                <Icon className="nav-icon" icon={ic_queue_music} />
                Playlists
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/player/artists" activeClassName="active">
                <Icon className="nav-icon" icon={ic_person} />
                Artists
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/player/albums" activeClassName="active">
                <Icon className="nav-icon" icon={ic_album} />
                Albums
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/player/tracks" activeClassName="active">
                <Icon className="nav-icon" icon={ic_music_note} />
                Tracks
              </NavLink>
            </div>
            <div className="nav-item">
              <span className="nav-title">DISCOVER</span>
            </div>
            <div className="nav-item">
              <NavLink to="/player/store" activeClassName="active">
                <Icon className="nav-icon" icon={ic_stars} />
                Store
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/player/radio" activeClassName="active">
                <Icon className="nav-icon" icon={ic_radio} />
                Radio
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/player/foryou" activeClassName="active">
                <Icon className="nav-icon" icon={ic_favorite} />
                For You
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/" activeClassName="" className="home-button">
                Home
              </NavLink>
            </div>
          </Menu>
          <div className="page-title-small">{this.props.title}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.data.title,
});

export default connect(mapStateToProps)(NavBar);
