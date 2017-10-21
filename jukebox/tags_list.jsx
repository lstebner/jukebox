require("./tags_list.less");

import React from 'react';
import types from 'prop-types';

class TagsList extends React.Component {
  static propTypes = {
    tags: types.arrayOf(types.string),
    handle_tag_click: types.func,
  }

  static defaultProps = {
    tags: [],
  }

  render() {
    return (
      <div className="tags-list">
        {this.render_tags()}
      </div>
    );
  }

  render_tags() {
    if (this.props.tags.length) {
      const tags = [];

      for (let i = 0; i < this.props.tags.length; i++) {
        tags.push(this.render_tag(this.props.tags[i]));
      }

      return (
        <ul className="list_of_tags">
          {tags}
        </ul>
      );
    }
  }

  render_tag(tag) {
    return (
      <li className="tag" onClick={this.handle_tag_click.bind(this, tag)}>
        {tag}
      </li>
    );
  }

  handle_tag_click(tag) {
    if (typeof this.props.handle_tag_click === "function") {
      this.props.handle_tag_click(tag);
    }
  }
}

module.exports = TagsList;
