import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { authInstance } from "../apis/axiosInstance";

function usePosts(url) {
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

  return { isLoading, error, data };
}

export default usePosts;
