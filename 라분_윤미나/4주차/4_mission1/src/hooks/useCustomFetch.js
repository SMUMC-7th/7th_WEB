import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoding(true); //처음에는 항상 로딩이 true
      try {
        const response = await axiosInstance.get(url);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      } finally {
        setIsLoding(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useCustomFetch;
