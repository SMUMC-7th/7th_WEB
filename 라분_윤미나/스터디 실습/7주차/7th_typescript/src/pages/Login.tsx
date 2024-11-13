import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { FormEvent } from "react";
import { login } from "../apis/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUsername } = useAuthContext();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    try {
      const user = await login(username, password);
      setUsername(user.username);
      navigate("/profile");
    } catch {
      alert("로그인 실패");
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">username</label>
        <input id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" name="password" />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
};
export default LoginPage;
