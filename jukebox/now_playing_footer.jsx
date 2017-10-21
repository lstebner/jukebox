require("./now_playing_footer.less");
import React from 'react';

class NowPlayingFooter extends React.Component {
  classes() {
    return "now-playing-footer";
  }

  render() {
    return (
      <div className={this.classes()} />
    )
  }
}

module.exports = NowPlayingFooter;
