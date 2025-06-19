import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditPost from "./pages/EditPost"; // adjust path as needed
import AddPost from "./pages/AddPost";
import Home from "./pages/Home";
import DeletePost from "./pages/DeletePost";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/delete/:id" element={<DeletePost />} />
      </Routes>
    </Router>
  );
}

export default App;
