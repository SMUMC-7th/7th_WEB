import { useQuery } from "react-query";
import { axiosInstance } from "../apis/axios-instance";
import { MovieData } from "../types/types";

const useGetMovies = (category: string) => {
  return useQuery<MovieData>([category], async () => {
    const { data } = await axiosInstance.get<MovieData>(
      `/movie/${category}?include_adult=false&include_video=false&language=ko-KR&page=1`
    );
    return data;
  });
};

export default useGetMovies;
