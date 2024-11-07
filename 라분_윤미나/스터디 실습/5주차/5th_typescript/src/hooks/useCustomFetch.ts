import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

type FetchResults<T> = {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
};
const useCustomFetch = <T>(url: string): FetchResults<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); //처음에는 항상 로딩이 true
      try {
        const response = await axiosInstance.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useCustomFetch;
