import React from 'react';

class JukeboxHeader extends React.Component {
  classes() {
    return "jukebox-header";
  }

  render() {
    return (
      <div className={this.classes()} />
    )
  }
}

module.exports = JukeboxHeader;
