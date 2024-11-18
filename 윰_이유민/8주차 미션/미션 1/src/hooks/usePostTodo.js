import { useState } from 'react';
import { axiosInstance } from '../apis/axios-instance';

const usePostTodo = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const postTodo = async (todoData) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(url, todoData);
      return response.data;
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { postTodo, isLoading, isError };
};

export default usePostTodo;
