import React from 'react';

class BeatsList extends React.Component {
  classes() {
    return "beats-list";
  }

  render() {
    return (
      <div className={this.classes()} />
    )
  }
}

module.exports = BeatsList;
