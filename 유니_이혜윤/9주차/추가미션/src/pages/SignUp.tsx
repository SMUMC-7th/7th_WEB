import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface SignUpRequest {
  email: string;
  password: string;
  role: string;
}

interface SignUpResponse {
  id: number;
  email: string;
  refreshToken: string;
  role: string;
}

const signUp = async (data: SignUpRequest): Promise<SignUpResponse> => {
  const response = await axios.post("http://localhost:3000/v1/users", data);
  console.log(response);
  return response.data;
};

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      navigate("/login");
    },
    onError: () => {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    },
  });

  const handleSignUp = () => {
    if (!email || !password) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    // role "user"로 지정
    mutation.mutate({ email, password, role: "user" });
  };

  return (
    <div className="m-10 flex flex-col gap-4">
      <h1 className="text-[20px] font-bold mb-3">회원가입</h1>
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
        onClick={handleSignUp}
        className="justify-center items-center w-[80px] h-[30px] bg-[#14B885] text-white rounded-2xl hover:bg-[#4ebb98]"
      >
        회원가입
      </button>
      <p className="text-[#14B885]">
        계정이 이미 있으신가요?&nbsp;
        <Link to="/login" className="font-bold hover:text-[#a7e2cf]">
          로그인
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
