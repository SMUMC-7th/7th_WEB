import { useQuery, UseQueryResult } from "react-query";
import { axiosInstance } from "../apis/axios-instance";
import { MovieCreditsResponse } from "../types/types";

const useGetCredit = (id: string): UseQueryResult<MovieCreditsResponse> => {
  return useQuery<MovieCreditsResponse>(["movieCredit", id], async () => {
    const { data } = await axiosInstance.get(
      `/movie/${id}/credits?language=ko-KR`
    );
    return data;
  });
};

export default useGetCredit;
