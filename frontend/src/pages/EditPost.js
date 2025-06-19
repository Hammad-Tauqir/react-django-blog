import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./EditPost.css";

const EditPost = () => {
  const { id } = useParams(); // get post ID from URL
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts/${id}/`)
      .then(response => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setContent(response.data.content);
      })
      .catch(error => {
        console.error("Error fetching post:", error);
        setMessage("Failed to load post.");
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/posts/${id}/`, {
        title,
        author,
        content,
      });
      setMessage("Post updated successfully!");
    } catch (error) {
      console.error("Error updating post:", error);
      setMessage("Failed to update post.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="edit-post">
        <h2>Edit Post</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            required
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author Name"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Post Content"
            required
          ></textarea>
          <button type="submit">Update Post</button>
        </form>
      </div>
    </>
  );
};

export default EditPost;
