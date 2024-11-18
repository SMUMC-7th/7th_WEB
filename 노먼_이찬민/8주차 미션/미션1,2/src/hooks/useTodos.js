import React, { useCallback, useEffect, useState } from "react";
import { defaultInstance } from "../api/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

function useTodos() {
  const url = "http://localhost:3000/todo";

  // 리렌더링 시 함수 재생성을 방지하기 위해서 useCallback 사용
  const addTodo = useCallback(async (todo) => {
    try {
      const newTodo = await defaultInstance.post(url, todo);
      console.log(newTodo);
    } catch (error) {}
  }, []);

  const deleteTodo = useCallback(async (id) => {
    try {
      await defaultInstance.delete(`${url}/${id}`);
    } catch (error) {}
  }, []);

  const modifyTodo = useCallback(async (id, todo) => {
    try {
      const updatedTodo = await defaultInstance.patch(`${url}/${id}`, todo);
    } catch (error) {}
  }, []);

  const getTodos = async () => {
    const data = await defaultInstance.get(url);
    return data.data[0];
  };

  useEffect(() => {
    getTodos();
  }, [addTodo, deleteTodo, modifyTodo]);

  const {
    isLoading,
    error,
    data: todos,
    isFetching,
  } = useQuery({
    queryKey: ["todos", addTodo, deleteTodo, modifyTodo],
    queryFn: getTodos,
  });

  // const { isLoading, error, data } = useMutation({
  //   mutationFn: postTodo,
  //   onSuccess: () => {
  //     queryClient;
  //   },
  // });

  return { todos, addTodo, deleteTodo, modifyTodo, isLoading, error };
}

export default useTodos;
