import React, { useCallback, useContext, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authInstance } from "../apis/axiosInstance";

type newPost = {
  title: string;
  content: string;
};

function usePosts(url) {
  const queryClient = useQueryClient();
  async function getPosts() {
    try {
      //const BASE_URL: string = "http://localhost:3000"; 은 이미 지정됨
      const apiRes = await authInstance.get(url);
      console.log(apiRes);
      return apiRes.data;
    } catch (error) {
      console.error(error);
    }
  }

  // useQuery
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["posts", url],
    queryFn: getPosts,
  });

  const writePost = async (title: string, content: string) => {
    console.log("+++++++++++++++++++++++", title, content);
    const resApi = await authInstance.post("/v1/posts", {
      title: title,
      content: content,
    });
  };

  const writeMutation = useMutation({
    mutationFn: (newPost: newPost) => writePost(newPost.title, newPost.content),

    onMutate: (newPost) => {
      queryClient.cancelQueries(["posts"]); // get query 임시 중단
      const prevPosts = queryClient.getQueryData(["posts"]); // 현재 상태 저장
      queryClient.setQueryData(["posts"], (old) => [...old, newPost]); // 일단 newPost를 지금 데아터에 추가해버림

      return { prevPosts }; // 저장한거 반환
    },

    onError: (err, newPost, context) => {
      // 오류 나면 롤백
      queryClient.setQueryData(["posts"], context.prevPosts);
    },

    onSettled: () => {
      // 다 끝났을 때 마지막
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      }); // posts get query 비유효 처리 -> 최신거 다시 불러옴
    },
  });

  return { isLoading, error, data, writeMutation };
}

export default usePosts;
