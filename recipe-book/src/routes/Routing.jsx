import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Signup from "../pages/auth/signup/Signup";
import PostList from "../pages/post/PostList";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<PostList />} />
    </Routes>
  );
}

export default Routing;
