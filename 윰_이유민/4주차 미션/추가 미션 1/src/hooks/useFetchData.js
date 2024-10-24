import { useState } from "react";
import { axiosInstance } from "../apis/axios-instance";
import { useEffect } from "react";

const useFetchData = (url, newUrl = null) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(url);
        setData(response);
      } catch(error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (url) {
      fetchData();
    }
  }, [url, newUrl])

  return {data, isLoading, isError}
}

export default useFetchData;