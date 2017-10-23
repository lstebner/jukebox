require("./now_playing_footer.less");
import React from 'react';
import types from 'prop-types'

class NowPlayingFooter extends React.Component {
  static propTypes = {
    metadata: types.string,
    is_collapsed: types.bool,
  }

  static defaultProps = {
    metadata: "",
    is_collapsed: false,
  }

  constructor(props) {
    super(props);

    this.state = {
      is_collapsed: this.props.is_collapsed,
    };
  }

  classes() {
    return "now-playing-footer";
  }

  render() {
    return (
      <div className={this.classes()}>
        <div className="shadow"/>
        {this.render_is_playing_icon()}
        {this.render_toggle_control()}
        <div className="now_playing_label">Now Playing</div>
        <div className="metadata">{this.props.metadata}</div>
        {this.render_progress_bar()}
      </div>
    )
  }

  render_is_playing_icon() {
    let label;
    if (this.props.is_playing) {
      label = "play_outline_circle";
    }
    else {
      label = "pause_outline_circle";
    }

    return <span className="material-icons">{label}</span>;
  }

  render_toggle_control() {
    let label;
    if (this.state.is_collapsed) {
      label = "expand_more";
    }
    else {
      label = "expand_less";
    }

    return <span className="material-icons">{label}</span>;
  }

  render_progress_bar() {
    // todo <ProgresseBar />
  }

  collapse() {
    this.setState({ is_collapsed: true });
  }

  expand() {
    this.setState({ is_collapsed: false });
  }

  toggle_collapsed() {
    if (this.state.is_collapsed) {
      this.expand();
    }
    else {
      this.collapse();
    }
  }
}

module.exports = NowPlayingFooter;
