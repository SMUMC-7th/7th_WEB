import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex flex-row">
      <Link to={"/"}>Blog</Link>
      <Link to={"/login"}>로그인</Link>
    </div>
  );
};
