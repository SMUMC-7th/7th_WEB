import { useQuery, UseQueryResult } from "react-query";
import { axiosInstance } from "../apis/axios-instance";

interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useGetTrendingMovie = (): UseQueryResult<MoviesResponse> => {
  return useQuery<MoviesResponse>("movies", async () => {
    const { data } = await axiosInstance.get<MoviesResponse>(
      `/trending/movie/day?language=ko-KR`
    );
    return data;
  });
};

export default useGetTrendingMovie;
