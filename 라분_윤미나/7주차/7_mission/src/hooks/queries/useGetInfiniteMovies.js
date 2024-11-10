import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchGetMovies } from "./useGetMovies";

export function useGetInfiniteMovies({ category }) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => fetchGetMovies({ category, pageParam }),
    queryKey: ["movies", category],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastMovie = lastPage.results[lastPage.results.length - 1];
      //const lastMovie = lastPage.at(-1);
      return lastMovie ? allPage?.length + 1 : undefined;
    },
  });
}

//export { useGetInfiniteMovies };
