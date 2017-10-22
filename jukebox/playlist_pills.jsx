require("./playlist_pills.less");
import React from 'react';
import types from 'prop-types';

class PlaylistPills extends React.Component {
  static propTypes = {
    playlists: types.array,
    handle_playlist_click: types.func,
  }

  static defaultProps = {
    playlists: []
  }

  key(prepend="") {
    if (typeof this._next_key === "undefined") {
      this._next_key = 0;
    }

    return `${prepend}${this._next_key++}`;
  }

  classes() {
    return "playlist-pills";
  }

  render() {
    return (
      <div className={this.classes()}>
        <ul className="playlists">
          {this.render_playlists()}
        </ul>
      </div>
    )
  }

  render_playlists() {
    const playlists = [];

    for (let i = 0; i < this.props.playlists.length; i++) {
      playlists.push(this.render_playlist(this.props.playlists[i]));  
    }

    return playlists;
  }

  handle_playlist_click(playlist) {
    if (typeof this.props.handle_playlist_click === "function") {
      this.props.handle_playlist_click(playlist);
    }
  }

  render_playlist(playlist) {
    return (
      <ul className={`playlist_pill ${this.get_playlist_classes(playlist)}`} key={this.key("playlist-pill")}>
        <a href="#" onClick={this.handle_playlist_click.bind(this, playlist)}>{playlist.name}</a>
      </ul>
    );
  }

  get_playlist_classes(playlist) {
    const classes = [];

    if (playlist.is_selected) {
      classes.push("is_selected");
    }

    return classes.join(" ");
  }
}

module.exports = PlaylistPills;
