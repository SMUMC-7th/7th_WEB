import React, { useCallback, useContext, useEffect, useState } from "react";
import { defaultInstance } from "../api/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { todoContext } from "../context/todoContext";

function useTodos() {
  let url = "http://localhost:3000/todo";
  const queryClient = useQueryClient();

  // 리렌더링 시 함수 재생성을 방지하기 위해서 useCallback 사용
  const addTodo = useCallback(async (todo) => {
    try {
      const newTodo = await defaultInstance.post(url, todo);
    } catch (error) {}
  }, []);

  const modifyTodo = useCallback(async (id, todo) => {
    console.log(id, todo);
    try {
      const updatedTodo = await defaultInstance.patch(`${url}/${id}`, todo);
    } catch (error) {}
  }, []);

  const deleteTodo = useCallback(async (id) => {
    try {
      await defaultInstance.delete(`${url}/${id}`);
    } catch (error) {}
  }, []);

  const getTodos = async (keyword) => {
    try {
      if (keyword) {
        url = `${url}?title=${keyword}`;
      }
      const data = await defaultInstance.get(url);
      return data?.data[0];
    } catch (error) {
      console.error(error);
    }
  };

  const addMutation = useMutation({
    mutationFn: (newTodo) => addTodo(newTodo),
    onMutate: (newTodo) => {
      console.log(queryClient.getQueryData(["todos"]));
      queryClient.cancelQueries(["todos"]); // get query 임시 중단
      const prevTodos = queryClient.getQueryData(["todos"]); // 현재 상태 저장
      queryClient.setQueryData(["todos"], (old) => [...old, newTodo]); // 일단 newTodo를 지금 데아터에 추가해버림
      return { prevTodos }; // 저장한거 반환
    },

    onError: (err, newTodo, context) => {
      // 오류 나면 롤백
      queryClient.setQueryData(["todos"], context.prevTodos);
    },

    onSettled: () => {
      // 다 끝났을 때 마지막
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      }); // todos get query 비유효 처리 -> 최신거 다시 불러옴
    },
  });

  const modifyMutation = useMutation({
    mutationFn: ({ id, modTodo }) => modifyTodo(id, modTodo),
    onMutate: ({ id, modTodo }) => {
      console.log(id, modTodo);
      queryClient.cancelQueries(["todos"]); // get query 임시 중단
      const prevTodos = queryClient.getQueryData(["todos"]); // 현재 상태 저장
      queryClient.setQueryData(["todos"], (old) =>
        old.map((todo) => (todo.id === id ? modTodo : todo))
      ); // 일단 modifyTodo를 지금 데아터 적용해버림
      return { prevTodos }; // 저장한거 반환
    },

    onError: (err, todo, context) => {
      // 오류 나면 롤백
      queryClient.setQueryData(["todos"], context.prevTodos);
    },

    onSettled: () => {
      // 다 끝났을 때 마지막
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      }); // todos get query 비유효 처리 -> 최신거 다시 불러옴
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onMutate: (id) => {
      queryClient.cancelQueries(["todos"]); // get query 임시 중단
      const prevTodos = queryClient.getQueryData(["todos"]); // 현재 상태 저장
      queryClient.setQueryData(["todos"], (old) =>
        old.filter((todo) => todo.id !== id)
      ); // 일단 newTodo를 지금 데아터에 추가해버림
      return { prevTodos }; // 저장한거 반환
    },

    onError: (err, newTodo, context) => {
      // 오류 나면 롤백
      queryClient.setQueryData(["todos"], context.prevTodos);
    },

    onSettled: () => {
      // 다 끝났을 때 마지막
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      }); // todos get query 비유효 처리 -> 최신거 다시 불러옴
    },
  });

  return {
    getTodos,
    addMutation,
    deleteMutation,
    modifyMutation,
  };
}

export default useTodos;
