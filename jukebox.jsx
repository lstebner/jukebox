require("./jukebox/jukebox.less");

import React from 'react';
import {Header, PlaylistPills, BeatsList, NowPlayingFooter} from './jukebox-components.jsx';

class Jukebox extends React.Component {
  render() {
    return (
      <div className="jukebox">
        <Header />
        <PlaylistPills />
        <BeatsList />
      </div>
    );
  }
}

module.exports = Jukebox;
