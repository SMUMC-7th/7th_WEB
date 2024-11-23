import useForm from "../../hooks/use-form";
import { validateLogin } from "../../utils/validate";
import * as S from "./Login.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import IsLoginContext from "../../context/LoginContext";
import { useMutation } from "@tanstack/react-query";

const loginApi = async (credentials) => {
  const response = await axios.post(
    "http://localhost:3000/auth/login",
    credentials
  );
  return response.data;
};

const Login = () => {
  const login = useForm({
    initialValue: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });
  const navigate = useNavigate();

  const { handleLogin } = useContext(IsLoginContext);

  const mutation = useMutation({
    mutationFn: loginApi,
    onSuccess(data) {
      const { refreshToken, accessToken } = data;
      alert("로그인 성공 !!");
      handleLogin(accessToken, refreshToken);
      navigate("/");
    },
    onError() {
      alert("로그인에 실패하였습니다. 다시 시도해주세요 ㅠㅠ");
    },
  });

  const handlePressLogin = (event) => {
    event.preventDefault();

    mutation.mutate({
      email: login.values.email,
      password: login.values.password,
    });
  };

  return (
    <S.LoginContainer>
      <h2>로그인</h2>
      <S.LoginForm>
        <input
          type={"email"}
          placeholder="이메일을 입력해주세요!"
          {...login.getTextInputProps("email")}
        />
        {login.touched.email && login.errors.email && (
          <S.ErrorText>{login.errors.email}</S.ErrorText>
        )}

        <input
          type={"password"}
          placeholder="비밀번호를 입력해주세요!"
          {...login.getTextInputProps("password")}
        />
        {login.touched.password && login.errors.password && (
          <S.ErrorText>{login.errors.password}</S.ErrorText>
        )}

        <button onClick={handlePressLogin}>로그인</button>
      </S.LoginForm>
    </S.LoginContainer>
  );
};

export default Login;
