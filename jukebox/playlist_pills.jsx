require("./playlist_pills.less");
import React from 'react';
import types from 'prop-types';

class PlaylistPills extends React.Component {
  static propTypes = {
    playlists: types.array,
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
        {this.render_playlists()}
      </div>
    )
  }

  render_playlists() {
    const playlists = [];

    for (let i = 0; i < this.props.playlists.length; i++) {
      playlists.push(this.render_playlist(this.props.playlist[i]));  
    }

    return playlists;
  }

  render_playlist(playlist) {
    return (
      <div className="playlist_pill" key={this.key("playlist-pill")}>
        <a href="#">{playlist.name}</a>
      </div>
    );
  }
}

module.exports = PlaylistPills;
