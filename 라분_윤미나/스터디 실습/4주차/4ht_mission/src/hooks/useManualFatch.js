import { useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useManualFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(url);
      setData(response);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  fetchData();

  return { data, isLoading, isError };
};

export default useManualFetch;
