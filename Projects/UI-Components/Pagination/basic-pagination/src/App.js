import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const IndexOfLastPost = currentPage * postPerPage;
  const IndexOfFirstPost = IndexOfLastPost - postPerPage;
  const currentPosts = posts.slice(IndexOfFirstPost, IndexOfLastPost);

  return (
    <div className="container mb-5">
      <h2 className="text-primary mb-3">My Blog</h2>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        currentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
