import { useQuery, UseQueryResult } from "react-query";
import { axiosInstance } from "../apis/axios-instance";
import { MovieDetail } from "../types/types";

const useGetMovieDetail = (id: string): UseQueryResult<MovieDetail> => {
  return useQuery<MovieDetail>(["movieDetail", id], async () => {
    const { data } = await axiosInstance.get<MovieDetail>(
      `/movie/${id}?language=ko-KR&page=1`
    );
    return data;
  });
};

export default useGetMovieDetail;
