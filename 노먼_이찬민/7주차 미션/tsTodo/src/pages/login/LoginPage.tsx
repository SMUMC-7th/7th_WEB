import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { login } from "../../apis/auth";

function LoginPage() {
  const navigate = useNavigate();
  const { setUsername } = useAuthContext();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    console.log(username, password);

    // console.log(Object.fromEntries(new FormData(e.currentTarget)));
    try {
      const user = await login(username, password);
      setUsername(user.username);
      navigate("/");
    } catch (error) {
      alert("로그인 실패");
    }
  };

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <div>
        <label htmlFor="username">username</label>
        <input id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" type="password" name="password" />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoginPage;
