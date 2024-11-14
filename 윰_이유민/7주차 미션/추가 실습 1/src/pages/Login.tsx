import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { FormEvent } from 'react';
import { login } from '../apis/auth';

const Login = () => {
  const navigate = useNavigate();
  const { setUserName } = useAuthContext();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    // Object.fromEntries(new FormData(e.currentTarget));

    try {
      const user = await login(username, password);
      setUserName(user.username);
      navigate('/');
    } catch {
      alert('로그인 실패');
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
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
};

export default Login;
