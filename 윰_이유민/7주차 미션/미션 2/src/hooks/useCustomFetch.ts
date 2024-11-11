import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { axiosInstance } from '../apis/axios-instance';

interface UseCustomFetchProps<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
}

const useCustomFetch = <T>(url: string): UseCustomFetchProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const {data, isLoading, isError} = useCustomFetch('url');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse<T> = await axiosInstance.get(url);
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useCustomFetch;
