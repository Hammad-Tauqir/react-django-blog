import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts/${id}/`)
      .then((res) => setPost(res.data))
      .catch(() => setMessage("Post not found or already deleted."));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/posts/${id}/`);
      setMessage("Post deleted successfully.");
      setTimeout(() => navigate("/add"), 1500);
    } catch (err) {
      console.error("Delete failed:", err);
      setMessage("Failed to delete the post.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="delete-post">
        <h2>Delete Post</h2>
        {message && <p>{message}</p>}
        {post ? (
          <>
            <p>Are you sure you want to delete the following post?</p>
            <h3>{post.title}</h3>
            <p><strong>Author:</strong> {post.author}</p>
            <p>{post.content}</p>
            <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>
              Confirm Delete
            </button>
            <button onClick={() => navigate("/add")} style={{ marginLeft: "10px" }}>
              Cancel
            </button>
          </>
        ) : (
          <p>Loading post details...</p>
        )}
      </div>
    </>
  );
};

export default DeletePost;
