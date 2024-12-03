import React, { useState } from "react";
import { useNavigate } from "react-router";
import { defaultInstance } from "../../apis/axiosInstance";
import { useAuthStore } from "../../state/auth/store";

function LoginPage() {
  const navigate = useNavigate();
  const { isLogin, login } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const resLogin = await defaultInstance.post("/v1/auth/login", {
    //   email: e.target[0].value,
    //   password: e.target[1].value,
    // });
    login(e.target[0].value, e.target[1].value);
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-between items-center min-w-full">
      <form
        className="flex-center flex-col min-w-full min-h-[50vh]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p className="text-3xl text-gray-600">로그인해서 글을 작성해보세요!</p>
        <input
          type="text"
          placeholder="ID"
          className="w-1/4 px-10 py-5 my-5 text-2xl inline-flex items-center rounded-md bg-green-50 font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
        />
        <input
          type="password"
          placeholder="PW"
          className="w-1/4 px-10 py-5 mb-5 text-2xl inline-flex items-center rounded-md bg-green-50 font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
        />
        <button
          type={"submit"}
          className="flex w-1/4 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          로그인
        </button>
      </form>
      <div className="flex-center gap-5 w-[40%]">
        <p>회원이 아니신가요?</p>
        <button
          onClick={() => navigate("/signup")}
          className="flex w-1/4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
