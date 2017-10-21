require("./playlist_pills.less");
import React from 'react';

class PlaylistPills extends React.Component {
  classes() {
    return "playlist-pills";
  }

  render() {
    return (
      <div className={this.classes()} />
    )
  }
}

module.exports = PlaylistPills;
