import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postBlog } from '../actionCreators/PostCreator';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.postBlog(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  postBlog: PropTypes.func.isRequired,
};

export default connect(null, { postBlog })(PostForm);
