import { useEffect, useState } from "react";
import { authInstance } from "../apis/axiosInstance";
import { useQuery } from "@tanstack/react-query";

function useMovies(url: string) {
  async function getMovies() {
    try {
      //https://api.themoviedb.org/3은 이미 지정됨
      const apiRes = await authInstance.get(url);
      console.log(apiRes);
      return apiRes.data;
    } catch (error) {
      console.error(error);
    }
  }

  // useQuery
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["movies", url],
    queryFn: getMovies,
  });

  return { isLoading, error, data };
}

export default useMovies;
