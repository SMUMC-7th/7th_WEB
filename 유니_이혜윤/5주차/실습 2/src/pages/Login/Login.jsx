import useForm from "../../hooks/use-form";
import { validateLogin } from "../../utils/validate";
import * as S from "./Login.style";

const Login = () => {
  const login = useForm({
    initialValue: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  // console.log(login);

  const handlePressLogin = () => {
    alert("로그인 성공 !!");
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
