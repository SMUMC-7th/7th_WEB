import React, { useEffect, useState, useContext } from "react";
import * as S from "./LoginPage.style";
import { useForm } from "react-hook-form";
import Input from "./../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
// TIP: zod를 사용하신다면 @hookform/resolvers/zod 를 import 하시면 됩니다!
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../const/schema";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "./../../context/UserContext";

function LoginPage() {
  const navigate = useNavigate();
  const { isLogin, setIsLogin, username, setUsername } =
    useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginSchema),
  });

  const postLogin = async (data) => {
    try {
      const apiRes = await axios.post("http://localhost:3000/auth/login", {
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("accessToken", apiRes.data.accessToken);
      localStorage.setItem("refreshToken", apiRes.data.refreshToken);
      setIsLogin(true);
      navigate("/");
    } catch (error) {
      setIsLogin(false);
    }
  };

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
    postLogin(data);
  };

  return (
    <S.Container>
      <S.MainBox onSubmit={handleSubmit(onSubmit)}>
        <h2>로그인 페이지</h2>
        <div>
          <Input
            type={"LoginEmail"}
            PlaceHolder={"이메일을 입력하세요"}
            register={register}
            // setLoginData={setLoginData}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <Input
            type={"LoginPw"}
            PlaceHolder={"비밀번호를 입력하세요"}
            register={register}
            // setLoginData={setLoginData}
          />
          <p>{errors.password?.message}</p>
        </div>
        <Button
          type={"LoginSubmit"}
          Content={"로그인"}
          isValid={isValid}
        ></Button>
      </S.MainBox>
    </S.Container>
  );
}

export default LoginPage;
