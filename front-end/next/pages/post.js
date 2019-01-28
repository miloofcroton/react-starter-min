import React, { Component, Fragment } from 'react';

class Post extends Component {

  render() {
    return (
      <Fragment>
        <h1>{this.props.query.title}</h1>
        <p>This is the blog post content.</p>
      </Fragment>
    );
  }
}

export default Post;
