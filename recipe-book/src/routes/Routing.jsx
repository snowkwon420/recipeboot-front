import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Signup from "../pages/auth/signup/Signup";
import Postform from "../pages/post/Postform";
import Postingredients from "../pages/post/Postingredients";
import PostList from "../pages/post/PostList";
import Post from '../pages/post/Post';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/posts/forms" element={<Postform />} />
      <Route path="/postingredients" element={<Postingredients />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  );
}

export default Routing;
