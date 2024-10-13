import { useState } from "react";
import { axiosInstance } from "../../apis/axios-instance.js"

function GetTokenBtn() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getTokenURL = "/authentication/token/new";

  const handleGetToken = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(getTokenURL);
      const { request_token } = response.data;

      localStorage.setItem("request_token", request_token);
      
      const askPermissionURL = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${window.location.href}`;
      window.location.href = askPermissionURL;
      
    } catch(error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return <button onClick={handleGetToken}>
    { isLoading ? "..." : "token"}
  </button>
  
}

export { GetTokenBtn }