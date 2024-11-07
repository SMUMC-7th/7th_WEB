export interface FetchResponse {
  results: TMoviesDTO[];
  page: number;
  total_pages: number;
  total_results: number;
}

export type TMoviesDTO = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMovies = {
  dates: {
    maximum: string;
    minnum: string;
  };
  page: number;
  results: TMoviesDTO;
  total_pages: number;
  total_results: number;
};

export type TCredit = {
  id: number;
  cast: TCreditCast[];
};

export type TCreditCast = {
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
};

export type TMovieDetails = {
  // adult: boolean;
  // backdrop_path: string;
  original_title: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  tagline: string;
  overview: string;
  poster_path: string;
};
