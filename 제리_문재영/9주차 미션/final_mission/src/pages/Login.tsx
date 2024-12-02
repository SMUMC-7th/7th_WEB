import React, { useState } from "react";
import useLoginMutation from "../hooks/auth/useLoginMutation";

export const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const { mutate } = useLoginMutation();

  return (
    <>
      <form className="login">
        <input
          name="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          name="password"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <button
          onClick={() => {
            mutate(
              { email: id, password: pwd },
              {
                onSuccess: () => {
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
