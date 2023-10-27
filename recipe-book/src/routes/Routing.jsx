import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Signup from "../pages/auth/signup/Signup";
import PostForm from "../pages/post/PostForm";
import Ingredients from "../pages/post/Ingredients";
import PostList from "../pages/post/PostList";
import Post from "../pages/post/Post";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/posts/forms" element={<PostForm />} />
      <Route path="/posts/forms/ingredients" element={<Ingredients />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  );
}

export default Routing;
