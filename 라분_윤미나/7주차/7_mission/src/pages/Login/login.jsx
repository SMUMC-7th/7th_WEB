import * as S from "./login.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorLottie from "../../components/Error/Error";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "../../context/LoginContext";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import postLogin from "../../hooks/queries/usePostLogin";

const LoginPage = () => {
  const navigate = useNavigate();

  const { mutate: postInfoMutation } = useMutation({
    mutationFn: postLogin,
    onSuccess: (response) => {
      console.log("데이터 제출 성공 ");
      if (!response) {
        console.error("response가 없습니다.");
        return;
      }
      console.log("API 응답: ", response);
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);

      setIsLogin(true);
      setAccessToken(response.accessToken);
      console.log(response.accessToken);

      navigate("/");
    },
    onError: (error) => {
      console.log("데이터 제출 실패: ", error);
    },
  });

  const [error, setError] = useState(false);
  let { setIsLogin, setAccessToken } = useContext(loginContext);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("올바른 이메일 형식이 아닙니다. 다시 확인해주세요!")
      .required("이메일을 반드시 입력해주세요."),
    password: yup
      .string()
      .min(8, "비밀번호는 8~16자 사이로 입력해주세요.")
      .max(16, "비밀번호는 8~16자 사이로 입력해주세요.")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    try {
      // const response = await axios.post(
      //   "http://localhost:3000/auth/login",
      //   data
      // );
      postInfoMutation({ data });
    } catch (error) {
      if (error.response) {
        setError(true);
        console.error("에러 발생:", error.response.data); // 서버가 제공하는 자세한 오류 메시지
      }
    }
  };

  if (error) {
    return <ErrorLottie />;
  }

  return (
    <S.Container>
      <S.H3>로그인</S.H3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="email"
          type={"email"}
          name="email"
          {...register("email")}
          placeholder="  이메일을 입력해주세요!"
          aria-label="email"
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input
          id="password"
          type={"password"}
          name="password"
          {...register("password")}
          placeholder="  비밀번호를 입력해주세요!"
          aria-label="password"
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <S.Button
          disabled={!isValid}
          style={{ background: isValid ? "rgb(255, 0, 119)" : "gray" }}
        >
          로그인
        </S.Button>
      </form>
    </S.Container>
  );
};

export default LoginPage;
