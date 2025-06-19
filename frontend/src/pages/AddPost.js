import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddPost.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]); // ⬅ All posts

  const fetchPosts = () => {
    axios.get("http://localhost:8000/api/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching posts:", err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/posts/", {
        title,
        author,
        content,
      });
      setMessage("Post added successfully!");
      setTitle("");
      setAuthor("");
      setContent("");
      fetchPosts(); // Refresh the list
    } catch (error) {
      console.error("Error adding post:", error);
      setMessage("Failed to add post.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="add-post">
        <h2>Add New Post</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <textarea
            placeholder="Write your post content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <button type="submit">Add Post</button>
        </form>

        <h3 style={{ marginTop: "40px" }}>All Posts</h3>
       <ul>
  {posts.map((post) => (
    <li key={post.id} style={{ marginBottom: "10px" }}>
      <strong>{post.title}</strong> by {post.author}
      <Link to={`/edit/${post.id}`}>
        <button style={{ marginLeft: "10px" }}>Edit</button>
      </Link>
      <Link to={`/delete/${post.id}`}>
        <button style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>
          Delete
        </button>
      </Link>
    </li>
  ))}
</ul>
      </div>
    </>
  );
};

export default AddPost;
