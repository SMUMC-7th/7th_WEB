import React from "react";
import styled from "styled-components";

const LoginButton = styled.button`
  width: 400px;
  height: 70px;
  padding: 10px 10px;
  margin-bottom: 20px;
  border: none;
  font-size: 20px;
  border-radius: 10px;
  background-color: ${(props) => (props.$isValid ? "#ff5494" : "grey")};
  color: white;
  cursor: ${(props) => (props.$isValid ? "pointer" : "disabled")};

  &:hover {
    background-color: ${(props) => (props.$isValid ? "#d6477b" : "grey")};
  }
`;

const SignUpButton = styled.button`
  width: 400px;
  height: 70px;
  padding: 10px 10px;
  margin-bottom: 20px;
  border: none;
  font-size: 20px;
  border-radius: 10px;
  background-color: ${(props) => (props.$isValid ? "#ff5494" : "grey")};
  color: white;
  cursor: ${(props) => (props.$isValid ? "pointer" : "disabled")};

  &:hover {
    background-color: ${(props) => (props.$isValid ? "#d6477b" : "grey")};
  }
`;

const Button = ({ type, Content, isValid }) => {
  // 로그인 제출 버튼
  // 스타일 컴포넌트에 props 전달 시에 카멜 케이스로 전달시 실제 DOM 객체에 props가 전달되므로,
  // 이를 $ prefix 형태 변수 - $isValid 로 방지함
  if (type === "LoginSubmit") {
    return (
      <LoginButton type="submit" disabled={!isValid} $isValid={isValid}>
        {Content}
      </LoginButton>
    );
  } else if (type === "SignUpSubmit") {
    return (
      <SignUpButton type="submit" disabled={!isValid} $isValid={isValid}>
        {Content}
      </SignUpButton>
    );
  }
  // 잘못된 타입으로 버튼 생성하려 함
  else {
    return <p>잘못된 버튼 타입</p>;
  }
};

export default Button;
