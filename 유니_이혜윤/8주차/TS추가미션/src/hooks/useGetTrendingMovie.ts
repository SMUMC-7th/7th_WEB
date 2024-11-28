import { useQuery, UseQueryResult } from "react-query";
import { axiosInstance } from "../apis/axios-instance";
import { MoviesResponse } from "../types/types";

const useGetTrendingMovie = (): UseQueryResult<MoviesResponse> => {
  return useQuery<MoviesResponse>("movies", async () => {
    const { data } = await axiosInstance.get<MoviesResponse>(
      `/trending/movie/day?language=ko-KR`
    );
    return data;
  });
};

export default useGetTrendingMovie;
