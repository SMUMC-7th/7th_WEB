import React, { useState } from "react";
import { useNavigate } from "react-router";
import { defaultInstance } from "../../apis/axiosInstance";

function SignUpPage() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value);
    const resLogin = await defaultInstance.post("/v1/users", {
      email: e.target[0].value,
      password: e.target[1].value,
      role: "user",
    });
    console.log(resLogin);
  };

  return (
    <div className="flex flex-col justify-between items-center min-w-full">
      <form
        className="flex-center flex-col min-w-full min-h-[50vh]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p className="text-3xl text-gray-600">블로그에 가입해보세요!</p>
        <input
          type="text"
          placeholder="사용할 email"
          className="w-1/4 px-10 py-5 my-5 text-2xl inline-flex items-center rounded-md bg-blue-50 font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20"
        />
        <input
          type="password"
          placeholder="사용할 password"
          className="w-1/4 px-10 py-5 mb-5 text-2xl inline-flex items-center rounded-md bg-blue-50 font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20"
        />
        <button
          type={"submit"}
          className="flex w-1/4 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          회원가입
        </button>
      </form>
      <div className="flex-center gap-5 w-[40%]">
        <p>이미 회원이신가요?</p>
        <button
          onClick={() => navigate("/login")}
          className="flex w-1/4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
