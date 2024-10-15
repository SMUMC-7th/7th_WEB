import { useState } from "react";
import { axiosInstance } from "../../apis/axios-instance"
import { useRequestApi } from "../../hooks/useRequestApi";

function CreateSessionBtn() {

  const { handleRequest, isLoading, isError } = useRequestApi();

  const handleCreateSession = async () => {
    handleRequest({
      method: "post",
      url: "/authentication/session/new",
      body: { request_token: localStorage.getItem("request_token") },
      localKeys: ["request_token"],
      onSuccess: (data) => {
        localStorage.setItem("session_id", data.session_id);
        alert("session ID를 얻었습니다!");
      },
    });
  }

  return <button onClick={handleCreateSession}>
    { isLoading ? "..." : "session" }
  </button>
}

export { CreateSessionBtn }