import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { slide as Menu } from "react-burger-menu";
import {
  ic_person,
  ic_music_note,
  ic_album,
  ic_queue_music,
  ic_library_music,
  ic_radio,
  ic_favorite,
  ic_stars
} from "react-icons-kit/md";
import { Consumer } from "../Context";

export default class NavBar extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { headerName } = value;
          return (
            <div className="navbar-container">
              <div className="top-nav">
                <div className="nav-item">
                  <span className="nav-title">LIBRARY</span>
                </div>
                <div className="nav-item">
                  <NavLink to="/playlists" activeClassName="active">
                    <Icon className="nav-icon" icon={ic_queue_music} />
                    Playlists
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/artists" activeClassName="active">
                    <Icon className="nav-icon" icon={ic_person} />
                    Artists
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/albums" activeClassName="active">
                    <Icon className="nav-icon" icon={ic_album} />
                    Albums
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/songs" activeClassName="active">
                    <Icon className="nav-icon" icon={ic_music_note} />
                    Songs
                  </NavLink>
                </div>
              </div>
              <div className="bottom-nav">
                <div className="nav-item">
                  <span className="nav-title">DISCOVER</span>
                </div>
                <div className="nav-item">
                  <NavLink to="/store" activeClassName="active">
                    <Icon className="nav-icon" icon={ic_stars} />
                    Store
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/radio" activeClassName="active">
                    <Icon className="nav-icon" icon={ic_radio} />
                    Radio
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/foryou" activeClassName="active">
                    <Icon className="nav-icon" icon={ic_favorite} />
                    For You
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink to="/browse" activeClassName="active">
                    <Icon className="nav-icon" icon={ic_library_music} />
                    Browse
                  </NavLink>
                </div>
              </div>
              <div className="mobile-menu">
                <Menu width={249}>
                  <div className="nav-item">
                    <span className="nav-title">LIBRARY</span>
                  </div>
                  <div className="nav-item">
                    <NavLink to="/playlists" activeClassName="active">
                      <Icon className="nav-icon" icon={ic_queue_music} />
                      Playlists
                    </NavLink>
                  </div>
                  <div className="nav-item">
                    <NavLink to="/artists" activeClassName="active">
                      <Icon className="nav-icon" icon={ic_person} />
                      Artists
                    </NavLink>
                  </div>
                  <div className="nav-item">
                    <NavLink to="/albums" activeClassName="active">
                      <Icon className="nav-icon" icon={ic_album} />
                      Albums
                    </NavLink>
                  </div>
                  <div className="nav-item">
                    <NavLink to="/songs" activeClassName="active">
                      <Icon className="nav-icon" icon={ic_music_note} />
                      Songs
                    </NavLink>
                  </div>
                  <div className="nav-item">
                    <span className="nav-title">DISCOVER</span>
                  </div>
                  <div className="nav-item">
                    <NavLink to="/store" activeClassName="active">
                      <Icon className="nav-icon" icon={ic_stars} />
                      Store
                    </NavLink>
                  </div>
                  <div className="nav-item">
                    <NavLink to="/radio" activeClassName="active">
                      <Icon className="nav-icon" icon={ic_radio} />
                      Radio
                    </NavLink>
                  </div>
                  <div className="nav-item">
                    <NavLink to="/foryou" activeClassName="active">
                      <Icon className="nav-icon" icon={ic_favorite} />
                      For You
                    </NavLink>
                  </div>
                  <div className="nav-item">
                    <NavLink to="/browse" activeClassName="active">
                      <Icon className="nav-icon" icon={ic_library_music} />
                      Browse
                    </NavLink>
                  </div>
                </Menu>
                <div className="page-title">{headerName}</div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
