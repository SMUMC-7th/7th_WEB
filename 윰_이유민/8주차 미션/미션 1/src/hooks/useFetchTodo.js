import { useState } from 'react';
import { axiosInstance } from '../apis/axios-instance';

const useFetchTodo = (url, method = 'post') => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const requestTodo = async (todoData) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance[method](url, todoData);
      return response.data;
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { requestTodo, isLoading, isError };
};

export default useFetchTodo;
