import * as S from "./login.style";
import useForm from "../../hooks/use-form";
import { validateLogin } from "../../utils/validate";

const LoginPage = () => {
  const login = useForm({
    initialValue: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  const handlePressLogin = () => {
    console.log(login.values.email, login.values.password);
  };

  return (
    <S.Container>
      <S.H3>로그인</S.H3>
      <S.Input
        type={"email"}
        {...login.getTextInputProps("email")}
        placeholder="  이메일을 입력해주세요!"
      />
      {login.touched.email && login.errors.email && (
        <S.ErrorText>{login.errors.email}</S.ErrorText>
      )}

      <S.Input
        type={"password"}
        {...login.getTextInputProps("password")}
        placeholder="  비밀번호를 입력해주세요!"
      />
      {login.touched.password && login.errors.password && (
        <S.ErrorText>{login.errors.password}</S.ErrorText>
      )}
      <S.Button
        onClick={handlePressLogin}
        // disabled={!login.isValid}
        // style={{ background: login.isValid ? "rgb(255, 0, 119)" : "gray" }}
      >
        로그인
      </S.Button>
    </S.Container>
  );
};

export default LoginPage;
