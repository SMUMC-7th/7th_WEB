import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useAuthStore from "../store/authStore";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post(
    "http://localhost:3000/v1/auth/login",
    credentials,
    { withCredentials: true }
  );
  console.log(response);
  return response.data;
};

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      alert("로그인 성공!");
      setIsLoggedIn(true);
      navigate("/");
    },
    onError: () => {
      alert("로그인에 실패했습니다. 정보를 확인해주세요.");
    },
  });

  const handleLogin = () => {
    mutation.mutate({ email, password });
  };

  return (
    <div className="m-10 flex flex-col gap-4">
      <h1 className="text-[20px] font-bold mb-3">로그인</h1>
      <input
        placeholder="이메일을 입력하세요"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 w-[400px] p-2 focus:ring-1 focus:ring-inset focus:outline-none"
      />
      <input
        placeholder="비밀번호를 입력하세요"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 w-[400px] p-2 focus:ring-1 focus:ring-inset focus:outline-none"
      />
      <button
        onClick={handleLogin}
        className="justify-center items-center w-[65px] h-[30px] bg-[#14B885] text-white rounded-2xl hover:bg-[#4ebb98]"
      >
        로그인
      </button>
      <p className="text-[#14B885]">
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup" className="font-bold hover:text-[#a7e2cf]">
          회원가입
        </Link>
      </p>
    </div>
  );
};

export default Login;
