import { useQuery } from '@tanstack/react-query';
import { getMovieCredit, getMovieList, getMoviePreview } from '../apis/movie';
import { TMovieCategory } from '../types/movie';

function useGetMovieList(category: TMovieCategory) {
  return useQuery({
    queryKey: ['movies', category],
    queryFn: () =>
      getMovieList({
        category,
      }),
  });
}

function useGetMoviePreview(id: number) {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: () =>
      getMoviePreview({
        id,
      }),
  });
}

function useGetMovieCredit(id: number) {
  return useQuery({
    queryKey: ['movie_credit', id],
    queryFn: () =>
      getMovieCredit({
        id,
      }),
  });
}

export { useGetMovieList, useGetMoviePreview, useGetMovieCredit };
