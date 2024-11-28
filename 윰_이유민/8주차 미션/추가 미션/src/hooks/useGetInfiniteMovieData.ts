import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import {
  TMovieCategory,
  TMovieListResponse,
  TMovieReviewResponse,
  TMovieSimilarResponse,
} from '../types/movie';
import { getMovieList, getMovieReview, getSearchMovieList, getSimilarMovies } from '../apis/movie';

function useGetInfiniteMovieList(
  category: TMovieCategory,
  queryOptions?: UseInfiniteQueryOptions<
    TMovieListResponse,
    DefaultError,
    InfiniteData<TMovieListResponse, number>,
    TMovieListResponse,
    QueryKey,
    number
  >,
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getMovieList({ category, page: pageParam }),
    queryKey: ['movieList', category],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastMovie = lastPage.results[lastPage.results.length - 1];
      return lastMovie ? allPage?.length + 1 : undefined;
    },
    ...queryOptions,
  });
}

function useGetInfiniteSearchMovieList(
  mq: string,
  queryOptions?: UseInfiniteQueryOptions<
    TMovieListResponse,
    DefaultError,
    InfiniteData<TMovieListResponse, number>,
    TMovieListResponse,
    QueryKey,
    number
  >,
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getSearchMovieList({ mq, page: pageParam }),
    queryKey: ['searchMovieList', mq],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastMovie = lastPage.results[lastPage.results.length - 1];
      return lastMovie ? allPage?.length + 1 : undefined;
    },
    ...queryOptions,
  });
}

function useGetInfiniteMovieReview(
  id: number,
  queryOptions?: UseInfiniteQueryOptions<
    TMovieReviewResponse,
    DefaultError,
    InfiniteData<TMovieReviewResponse, number>,
    TMovieReviewResponse,
    QueryKey,
    number
  >,
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getMovieReview({ id, page: pageParam }),
    queryKey: ['movieReview', id],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastMovie = lastPage.results[lastPage.results.length - 1];
      return lastMovie ? allPage?.length + 1 : undefined;
    },
    ...queryOptions,
  });
}

function useGetInfiniteSimilarMovies(
  id: number,
  queryOptions?: UseInfiniteQueryOptions<
    TMovieSimilarResponse,
    DefaultError,
    InfiniteData<TMovieSimilarResponse, number>,
    TMovieSimilarResponse,
    QueryKey,
    number
  >,
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getSimilarMovies({ id, page: pageParam }),
    queryKey: ['movieReview', id],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastMovie = lastPage.results[lastPage.results.length - 1];
      return lastMovie ? allPage?.length + 1 : undefined;
    },
    ...queryOptions,
  });
}

export {
  useGetInfiniteMovieList,
  useGetInfiniteSearchMovieList,
  useGetInfiniteMovieReview,
  useGetInfiniteSimilarMovies,
};
