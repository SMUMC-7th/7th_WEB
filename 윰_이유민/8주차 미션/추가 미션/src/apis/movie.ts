import { movieInstance } from './axios-instance';
import {
  TMovieCategory,
  TMovieCreditResponse,
  TMovieListResponse,
  TMovieResponse,
  TMovieReviewResponse,
  TMovieSimilarResponse,
} from '../types/movie';

interface UseGetMoviesProps {
  category: TMovieCategory;
  page?: number;
}

interface UseGetSearchMoviesProps {
  mq: string;
  page?: number;
}

interface UseGetMovieInfoProps {
  id: number;
}

interface UseGetMovieReviewProps {
  id: number;
  page?: number;
}

const getMovieList = async ({
  category,
  page = 1,
}: UseGetMoviesProps): Promise<TMovieListResponse> => {
  const { data } = await movieInstance.get(`/movie/${category}?language=ko-kr&page=${page}`);
  return data;
};

const getSearchMovieList = async ({
  mq,
  page = 1,
}: UseGetSearchMoviesProps): Promise<TMovieListResponse> => {
  const { data } = await movieInstance.get(
    `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=${page}`,
  );
  return data;
};

const getMoviePreview = async ({ id }: UseGetMovieInfoProps): Promise<TMovieResponse> => {
  const { data } = await movieInstance.get(`/movie/${id}?language=ko-kr`);
  return data;
};

const getMovieCredit = async ({ id }: UseGetMovieInfoProps): Promise<TMovieCreditResponse> => {
  const { data } = await movieInstance.get(`/movie/${id}/credits?language=ko`);
  return data;
};

const getMovieReview = async ({
  id,
  page = 1,
}: UseGetMovieReviewProps): Promise<TMovieReviewResponse> => {
  const { data } = await movieInstance.get(`/movie/${id}/reviews?language=en-US&page=${page}`);
  return data;
};

const getSimilarMovies = async ({
  id,
  page = 1,
}: UseGetMovieReviewProps): Promise<TMovieSimilarResponse> => {
  const { data } = await movieInstance.get(`/movie/${id}/similar?language=ko-KR&page=${page}`);
  return data;
};

export {
  getMovieList,
  getSearchMovieList,
  getMoviePreview,
  getMovieCredit,
  getMovieReview,
  getSimilarMovies,
};
