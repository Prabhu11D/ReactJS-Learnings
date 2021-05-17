import axios from "axios";
import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posqts")
      .then((res) =>
        this.setState({
          posts: res.data,
        })
      )
      .catch((err) => {
        this.setState({ errorMsg: "Error While Getting Post" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h2>Posts</h2>
        {posts.length
          ? posts.map((post) => <p key={post.id}>{post.title}</p>)
          : ""}
        {errorMsg ? <p>{errorMsg}</p> : ""}
      </div>
    );
  }
}

export default PostList;
