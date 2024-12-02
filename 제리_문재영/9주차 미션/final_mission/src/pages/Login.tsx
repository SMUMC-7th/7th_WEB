import React, { useState } from "react";
import useLoginMutation from "../hooks/auth/useLoginMutation";
import Cookies from "js-cookie";
export const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const { mutate } = useLoginMutation();

  // console.log(mutate);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="border border-black"
          placeholder="아이디를 입력해주세요..."
          name="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          className="border border-black"
          placeholder="비밀번호를 입력해주세요..."
          name="password"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            mutate(
              { email: id, password: pwd },
              {
                onSuccess: () => {
                  let token = localStorage.getItem("accessToken");
                  console.log(token); //null값..ㅠ

                  alert("로그인 성공");
                },
                onError: (error) => {
                  console.log(error);
                  alert("로그인 실패");
                },
              }
            );
          }}
        >
          로그인
        </button>
      </form>
    </>
  );
};
