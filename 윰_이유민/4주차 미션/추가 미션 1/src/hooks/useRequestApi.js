import { useState } from "react"
import { axiosInstance } from "../apis/axios-instance";

const useRequestApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleRequest = async ({ method, url, body, localKeys, onSuccess, errorMessage }) => {
    
    // 로컬스토리지 키의 존재 여부 확인
    const nonEstKey = localKeys.find((key) => !localStorage.getItem(key));
    if (nonEstKey) {
      alert(`${nonEstKey}가 존재하지 않습니다! 먼저 생성해 주세요!`);
      return;
    }

    // post 요청일 때 body 설정
    const requestBody = body ? body : null;

    setIsLoading(true);

    try {
      const response = await axiosInstance({method, url, data: requestBody});
      if (onSuccess)
        onSuccess(response.data);
    } catch(error) {
      console.log(error);
      setIsError(true);
      alert(`${errorMessage || "에러 발생"}\n : ${error.message}`)
    } finally {
      setIsLoading(false);
    }
  };

  return { handleRequest, isLoading, isError }
}

export {useRequestApi}