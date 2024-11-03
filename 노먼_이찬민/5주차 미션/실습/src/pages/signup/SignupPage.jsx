import React, { useEffect, useState } from "react";
import * as S from "./SignupPage.style";
import { useForm } from "react-hook-form";
import Input from "./../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
// TIP: zod를 사용하신다면 @hookform/resolvers/zod 를 import 하시면 됩니다!
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../../const/schema";

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  return (
    <S.Container>
      <S.MainBox onSubmit={handleSubmit(onSubmit)}>
        <h2>회원가입 페이지</h2>
        <div>
          <Input
            type={"SignUpEmail"}
            PlaceHolder={"이메일을 입력하세요"}
            register={register}
            // setLoginData={setLoginData}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <Input
            type={"SignUpPw"}
            PlaceHolder={"비밀번호를 입력하세요"}
            register={register}
            // setLoginData={setLoginData}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <Input
            type={"SignUpPwCheck"}
            PlaceHolder={"비밀번호를 입력하세요"}
            register={register}
            // setLoginData={setLoginData}
          />
          <p>{errors.passwordCheck?.message}</p>
        </div>
        <Button
          type={"SignUpSubmit"}
          Content={"회원가입"}
          isValid={isValid}
        ></Button>
      </S.MainBox>
    </S.Container>
  );
}

export default SignupPage;
