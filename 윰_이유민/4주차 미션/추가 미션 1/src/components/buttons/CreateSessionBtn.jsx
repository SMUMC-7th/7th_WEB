import { useState } from "react";
import { axiosInstance } from "../../apis/axios-instance"

function CreateSessionBtn() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const createSessionURL = "/authentication/session/new";

  const handleCreateSession = async () => {
    const request_token = localStorage.getItem("request_token");
    
    if (!request_token) {
      alert("request_token이 존재하지 않습니다! 먼저 token 버튼을 클릭하세요.")
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.post(createSessionURL, { request_token });
      const { session_id } = response.data;

      localStorage.setItem("session_id", session_id);
      alert("session ID를 얻었습니다!")
    } catch(error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
    
  }

  return <button onClick={handleCreateSession}>
    { isLoading ? "..." : "session" }
  </button>
}

export { CreateSessionBtn }