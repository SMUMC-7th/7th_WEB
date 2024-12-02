import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import * as yup from "yup";

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

// Yup
const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("유효한 이메일 형식이 아닙니다.")
    .required("이메일은 필수입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수입니다.")
    .min(10, "비밀번호는 최소 10자 이상이어야 합니다.")
    .matches(/[A-Z]/, "비밀번호에 영어 대문자가 포함되어야 합니다.")
    .matches(/[a-z]/, "비밀번호에 영어 소문자가 포함되어야 합니다.")
    .matches(/\d/, "비밀번호에 숫자가 포함되어야 합니다.")
    .matches(/[@$!%*?&]/, "비밀번호에 특수문자가 포함되어야 합니다."),
});

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
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

  const handleSignUp = async () => {
    try {
      await signUpSchema.validate({ email, password }, { abortEarly: false });
      setErrors({}); // 유효성 검사가 통과, 에러 초기화
      mutation.mutate({ email, password, role: "user" });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const fieldErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (error.path) {
            fieldErrors[error.path] = error.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="m-10 flex flex-col gap-4">
      <h1 className="text-[20px] font-bold mb-3">회원가입</h1>
      <div>
        <input
          placeholder="이메일을 입력하세요"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border w-[400px] p-2 ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:ring-1 focus:ring-inset focus:outline-none`}
        />
        {errors.email && (
          <p className="text-red-500 text-[12px]">{errors.email}</p>
        )}
      </div>
      <div>
        <input
          placeholder="비밀번호를 입력하세요"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`border w-[400px] p-2 ${
            errors.password ? "border-red-500" : "border-gray-300"
          } focus:ring-1 focus:ring-inset focus:outline-none`}
        />
        {errors.password && (
          <p className="text-red-500 text-[12px]">{errors.password}</p>
        )}
      </div>
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
