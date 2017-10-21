import React from 'react';
import types from 'prop-types';

class BeatsList extends React.Component {
  static propTypes = {
    beats: types.arrayOf(types.shape({
      name: types.string.isRequired,
      filename: types.string.isRequired,
      notes: types.string,
      duration: types.string,
      is_playing: types.bool.isRequired,
    })),
  }

  static defaultProps = {
    beats: []
  }
  
  classes() {
    return "beats-list";
  }

  render() {
    return (
      <div className={this.classes()}>
        {this.render_list()}
      </div>
    )
  }

  render_list() {
    const items = [];

    for (let i = 0; i < this.props.beats.length; i++) {
      items.push(this.render_list_item(this.props.beats[i]));
    }

    return items;
  }

  render_list_item(item) {
    return (
      <div className="beat">
        <a href="#">{item.name || item.filename}</a>
      </div>
    );
  }
}

module.exports = BeatsList;
