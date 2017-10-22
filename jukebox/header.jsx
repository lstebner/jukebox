require("./header.less");

import React from 'react';
import types from 'prop-types';

class JukeboxHeader extends React.Component {
  static propTypes = {
    // whether or not the current playlist is shuffled
    is_shuffled: types.bool,
    // called when the shuffle_btn is pressed to toggle shuffle
    // this callback will be passed the new desired is_shuffle state
    on_shuffle_change: types.func,
  }

  static defaultProps = {
    is_shuffled: false,
  }

  constructor(props) {
    super(props);
  }

  classes() {
    const classes = ["jukebox-header"];

    if (this.props.is_shuffled) {
      classes.push("is_shuffled");
    }

    return classes.join(' ');
  }

  render() {
    return (
      <div className={this.classes()}>
        {this.render_shuffled_icon()}
        <p className="title">Lukebox</p>
      </div>
    )
  }

  render_shuffled_icon() {
    let classes = "shuffle_btn";
    let label = "Shuffle";

    if (this.props.is_shuffled) {
      classes += " unshuffle";
      label = "Unshuffle";
    }

    return (
      <a href="#" className={classes} onClick={this.on_shuffle_clicked.bind(this)}>
        <span className="material-icons">shuffle</span>
      </a>
    );
  }

  on_shuffle_clicked() {
    if (typeof this.props.on_shuffle_change !== "undefined") {
      this.props.on_shuffle_change(this.props.is_shuffled ? false : true);
    }
  }
}

module.exports = JukeboxHeader;
