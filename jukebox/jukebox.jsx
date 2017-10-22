require("./jukebox.less");

import React from 'react';
import types from 'prop-types';
import {Header, PlaylistPills, BeatsList, NowPlayingFooter} from './jukebox-components.jsx';

class Jukebox extends React.Component {
  static propTypes = {
    beats: types.array, //todo: better define this array
  }

  static defaultProps = {
    beats: []
  }

  constructor(props) {
    super(props);

    this.state = {
      is_playing: false,
      now_playing_track_id: -1,
    }
  }

  render() {
    return (
      <div className="jukebox">
        <Header />
        <PlaylistPills />
        <BeatsList beats={this.props.beats} />
        {this.render_now_playing()}
      </div>
    );
  }

  render_now_playing() {
    if (this.state.is_playing) {
      return (
        <NowPlayingFooter />
      );
    }
  }
}

module.exports = Jukebox;
