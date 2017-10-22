require("./beats_list.less");
import React from 'react';
import types from 'prop-types';
import TagsList from "./tags_list.jsx";

class BeatsList extends React.Component {
  static propTypes = {
    beats: types.arrayOf(types.shape({
      name: types.string.isRequired,
      filename: types.string.isRequired,
      notes: types.string,
      duration: types.string,
      is_playing: types.bool.isRequired,
      tags: types.array,
    })),
    handle_item_click: types.func,
  }

  static defaultProps = {
    beats: []
  }

  key(prepend="") {
    if (typeof this._next_key === "undefined") {
      this._next_key = 0;
    }

    return `${prepend}${this._next_key++}`;
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

  handle_list_item_click(item) {
    if (typeof this.props.handle_item_click === "function") {
      this.props.handle_item_click(item);
    }
  }

  render_list_item(item) {
    let playing_icon;
    if (item.is_playing) {
      playing_icon = "pause_circle_outline";
    }
    else {
      playing_icon = "play_circle_outline";
    }

    return (
      <div key={this.key("beat")} className={`beat ${this.get_list_item_classes(item)}`}>
        <a href="#" className="track_name" onClick={this.handle_list_item_click.bind(this, item)}>
          <span className="material-icons">{playing_icon}</span>
          <span className="name">{item.name || item.filename}</span>
          {this.render_list_item_tags(item)}
        </a>
      </div>
    );
  }

  render_list_item_tags(item) {
    if (typeof item.tags !== "undefined") {
      return <TagsList tags={item.tags} />;
    }
  }

  get_list_item_classes(item) {
    const classes = [];

    if (item.is_playing) {
      classes.push("is_playing");
    }

    return classes.join(" ");
  }
}

module.exports = BeatsList;
