import { useQuery, UseQueryResult } from "react-query";
import { axiosInstance } from "../apis/axios-instance";

interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

interface MovieCreditsResponse {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

const useGetCredit = (id: string): UseQueryResult<MovieCreditsResponse> => {
  return useQuery<MovieCreditsResponse>(["movieCredit", id], async () => {
    const { data } = await axiosInstance.get(
      `/movie/${id}/credits?language=ko-KR`
    );
    return data;
  });
};

export default useGetCredit;
