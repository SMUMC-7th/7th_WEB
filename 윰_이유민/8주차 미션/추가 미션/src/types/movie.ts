export type TMovieCategory = 'now_playing' | 'popular' | 'top_rated' | 'upcoming';

export type TMovie = {
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

export type TMovieListResponse = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: TMovie[];
  total_pages: number;
  total_results: number;
};

type TMovieGenres = {
  id: number;
  name: string;
};

type TMovieProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type TMovieProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type TMovieSpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type TMovieResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: TMovieGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: TMovieProductionCompany[];
  production_countries: TMovieProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: TMovieSpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMovieVideo = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type TMovieVideoResponse = {
  id: number;
  results: TMovieVideo[];
};

export type TMovieCredit = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
  department?: string;
  job?: string;
};

export type TMovieCreditResponse = {
  id: number;
  cast: TMovieCredit[];
  crew: TMovieCredit[];
};

type TMovieReviewAuthor = {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
};

export type TMovieReview = {
  author: string;
  author_details: TMovieReviewAuthor;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type TMovieReviewResponse = {
  id: number;
  page: number;
  results: TMovieReview[];
};

export type TMovieSimilar = {
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
  video: false;
  vote_average: number;
  vote_count: number;
};

export type TMovieSimilarResponse = {
  page: number;
  results: TMovieSimilar[];
};
