import React from "react";
import styled from "styled-components";

const LoginInput = styled.input`
  width: 400px;
  height: 70px;
  padding: 10px 10px;
  /* margin-bottom: 20px; */
  border: none;
  font-size: 20px;
  border-radius: 10px;
`;

// 위와 똑같은데 분리 한 이유 : 혹시 회원가입의 입력창만 디자인을 바꿔야할 수 있으니까
const SignUpInput = styled.input`
  width: 400px;
  height: 70px;
  padding: 10px 10px;
  /* margin-bottom: 20px; */
  border: none;
  font-size: 20px;
  border-radius: 10px;
`;

// type만 주면 Input의 다양한 형태를 만들어서 반환
// Input 컴포넌트의 장점 : 여기서 인풋을 모두 상속받기에 여기를 고치면 됨
const Input = ({ type, PlaceHolder, register }) => {
  if (type === "LoginEmail") {
    return (
      <LoginInput
        // 스프레드 연산 : {...prev}, [...prev] 등 객체나 배열의 복사
        // setState에서 prev할때는 prev=>{...prev, 바꿀거:값} 의 형태를 사용해야하는데 두 가지 문제점 있음
        // 1. prev=>{}하면 화살표함수의 바디 표현이랑 객체스프레드연산의 형태가 똑같아서 (prev)=>({...prev, 속성:값})으로 사용해야함
        // 2. 객체 안에서 속성이름으로 변수값을 참조해야할때는 [속성변수] : 값 형태로 사용
        placeholder={PlaceHolder}
        {...register("email")}
      ></LoginInput>
    );
  } else if (type === "LoginPw") {
    return (
      <LoginInput
        type="password"
        placeholder={PlaceHolder}
        {...register("password")}
      ></LoginInput>
    );
  }
  // 위의 email 아래 email register는 서로 다름
  else if (type === "SignUpEmail") {
    return (
      <SignUpInput
        placeholder={PlaceHolder}
        {...register("email")}
      ></SignUpInput>
    );
  } else if (type === "SignUpPw") {
    return (
      <SignUpInput
        type="password"
        placeholder={PlaceHolder}
        {...register("password")}
      ></SignUpInput>
    );
  } else if (type === "SignUpPwCheck") {
    return (
      <SignUpInput
        type="password"
        placeholder={PlaceHolder}
        {...register("passwordCheck")}
      ></SignUpInput>
    );
  } else {
    return <p>잘못된 입력창 타입</p>;
  }
};

export default Input;
