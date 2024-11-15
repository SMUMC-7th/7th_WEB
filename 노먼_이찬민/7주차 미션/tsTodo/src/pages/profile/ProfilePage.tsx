import React from "react";
import { useAuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const { username } = useAuthContext();
  return <div>{username} 님 환영합니다</div>;
}

export default ProfilePage;
