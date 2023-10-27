import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Signup from "../pages/auth/signup/Signup";
import Post from '../pages/post/Post';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* 라우팅 추가 */}
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  );
}

export default Routing;
