import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchPost, Post } from './postReducer';
import { RootState } from './store';

class App extends Component<Props> {
  componentDidMount() {
    this.props.fetchPost();
  }
  render() {
    return (
      <div className="App">
        <h2>Blog Post</h2>
        {this.props.posts.map((post) => (
          <h3 key={post.id}>{post.title}</h3>
        ))}
      </div>
    );
  }
}

interface Props {
  posts: Post[];
  fetchPost: () => void;
}

const mapState = (state: RootState) => {
  return {
    posts: state.PostReducer.posts,
  };
};

const mapDispatch = {
  fetchPost: () => fetchPost(),
};

export default connect(mapState, mapDispatch)(App);
