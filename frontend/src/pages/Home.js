import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts/")
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div className="home">
      <h1>Latest Blog Posts</h1>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p><strong>Author:</strong> {post.author}</p>
            <p>{post.content.slice(0, 200)}...</p>
            <p><em>Posted on: {new Date(post.created_at).toLocaleString()}</em></p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
