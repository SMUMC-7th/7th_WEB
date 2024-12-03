import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { authInstance } from "../apis/axiosInstance";
import { getCookie, removeCookie } from "../utils/cookie";
import { useAuthStore } from "../state/auth/store";

const LoginCheck = (props) => {
  // const [userEmail, setUserEmail] = useState<string>();
  const navigate = useNavigate();
  const { userEmail, logout, loginValidCheck } = useAuthStore();
  console.log(userEmail);

  return (
    <div className="flex">
      {userEmail && <h1>{userEmail.split("@")[0]}님 환영합니다!</h1>}
      {/* <button onClick={logout}>로그아웃</button> */}
    </div>
  );
};
export default LoginCheck;
