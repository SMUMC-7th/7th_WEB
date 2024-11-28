import { useQuery } from "react-query";
import { axiosInstance } from "../apis/axios-instance";
import { MovieData } from "../types/types";

const useGetMovies = () => {
  return useQuery<MovieData>("movies", async () => {
    const { data } = await axiosInstance.get<MovieData>(
      `/movie/now_playing?include_adult=false&include_video=false&language=ko-KR&page=1`
    );
    return data;
  });
};

export default useGetMovies;
