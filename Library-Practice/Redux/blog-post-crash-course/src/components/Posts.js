import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actionCreators/PostCreator';
import { connect } from 'react-redux';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate() {
    if (this.props.newPost) {
      this.props.posts.unshift(this.props.newPost);
      console.log(this.props.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id} className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div className="posts">
        <div>
          <h2>Blog Posts</h2>
          {postItems}
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
