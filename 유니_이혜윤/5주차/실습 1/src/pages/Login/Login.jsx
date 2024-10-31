import { useEffect, useState } from "react";
import * as S from "./Login.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // 이메일 유효성 검사
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("올바른 이메일 형식이 아닙니다 :(");
    } else {
      setEmailError("");
    }
  };

  // 비밀번호 유효성 검사
  const validatePassword = (value) => {
    if (value.length < 8 || value.length > 16) {
      setPasswordError("비밀번호는 8자리 이상 16자리 이하여야 합니다 :(");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  useEffect(() => {
    // 이메일, 비밀번호 입력, 오류 메세지 없는 경우
    if (email && password && !emailError && !passwordError) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password, emailError, passwordError]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      alert("로그인 성공 !!");
    }
  };

  return (
    <S.LoginContainer>
      <h2>로그인</h2>
      <S.LoginForm onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일을 입력해주세요!"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}

        <input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}

        <S.SubmitButton
          type="submit"
          value="로그인"
          disabled={!isFormValid}
          isValid={isFormValid}
        />
      </S.LoginForm>
    </S.LoginContainer>
  );
};

export default Login;
