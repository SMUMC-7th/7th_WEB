import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Link, Outlet } from "react-router-dom";

function AppLayout(): Element {
  const { username } = useAuthContext();
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/"></Link>
      </div>
      {username ? (
        <Link to="/profile">{username}</Link>
      ) : (
        <Link to="/login">로그인</Link>
      )}
      <Outlet />
    </div>
  );
}

export default AppLayout;
