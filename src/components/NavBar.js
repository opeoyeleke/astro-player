import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { slide as Menu } from "react-burger-menu";
import { ic_person } from "react-icons-kit/md/ic_person";
import { ic_queue_music } from "react-icons-kit/md/ic_queue_music";
import { ic_album } from "react-icons-kit/md/ic_album";
import { ic_music_note } from "react-icons-kit/md/ic_music_note";

export default class NavBar extends Component {
  render() {
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
            <NavLink to="/playlists" activeClassName="active">
              <Icon className="nav-icon" icon={ic_queue_music} />
              Store
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/artists" activeClassName="active">
              <Icon className="nav-icon" icon={ic_person} />
              Radio
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/albums" activeClassName="active">
              <Icon className="nav-icon" icon={ic_album} />
              For You
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/songs" activeClassName="active">
              <Icon className="nav-icon" icon={ic_music_note} />
              Browse
            </NavLink>
          </div>
        </div>

        <div className="mobile-menu">
          <Menu>
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
          </Menu>
        </div>
      </div>
    );
  }
}
