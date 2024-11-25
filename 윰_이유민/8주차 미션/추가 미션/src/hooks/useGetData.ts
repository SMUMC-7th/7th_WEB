import { useQuery } from '@tanstack/react-query';
import { getMovieCredit, getMovieList, getMoviePreview } from '../apis/movie';
import { TMovieCategory } from '../types/movie';

function UseGetMovieList(category: TMovieCategory) {
  return useQuery({
    queryKey: ['movies', category],
    queryFn: () =>
      getMovieList({
        category,
      }),
  });
}

function UseGetMoviePreview(id: number) {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: () =>
      getMoviePreview({
        id,
      }),
  });
}

function UseGetMovieCredit(id: number) {
  return useQuery({
    queryKey: ['movie_credit', id],
    queryFn: () =>
      getMovieCredit({
        id,
      }),
  });
}

export { UseGetMovieList, UseGetMoviePreview, UseGetMovieCredit };
