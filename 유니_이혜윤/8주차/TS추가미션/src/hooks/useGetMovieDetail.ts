import { useQuery, UseQueryResult } from "react-query";
import { axiosInstance } from "../apis/axios-instance";

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface MovieDetail {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
  runtime: number;
  homepage: string | null;
  budget: number;
  revenue: number;
  status: string;
  tagline: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
}

const useGetMovieDetail = (id: string): UseQueryResult<MovieDetail> => {
  return useQuery<MovieDetail>(["movieDetail", id], async () => {
    const { data } = await axiosInstance.get<MovieDetail>(
      `/movie/${id}?language=ko-KR`
    );
    return data;
  });
};

export default useGetMovieDetail;
