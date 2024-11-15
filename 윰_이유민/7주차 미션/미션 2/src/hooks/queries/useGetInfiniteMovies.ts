import { useInfiniteQuery } from '@tanstack/react-query';
import { useGetMovies } from './useGetMovies';

function useGetInfiniteMovies(category: string) {
  return useInfiniteQuery({
    queryKey: ['movies', category],
    // eslint-disable-next-line react-hooks/rules-of-hooks
    queryFn: ({ pageParam = 1 }) => useGetMovies({ category, pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      // const lastMovie = lastPage.results[lastPage.results.length - 1];
      const lastMovie = lastPage.results.at(-1);
      return lastMovie ? allPages?.length + 1 : undefined;
    },
  });
}

export { useGetInfiniteMovies };
