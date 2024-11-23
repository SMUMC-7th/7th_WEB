import { useInfiniteQuery } from "@tanstack/react-query";
import useGetMovies from "@/hooks/queries/useGetMovies";

function useGetInfiniteMovies(category) {
  return useInfiniteQuery({
    queryKey: ["movieInfinite", category],
    queryFn: ({ pageParam = 1 }) => useGetMovies({ category, pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const hasMore = lastPage.page < lastPage.total_pages;
      return hasMore ? lastPage.page + 1 : undefined; // 다음 페이지를 반환
    },
  });
}

export { useGetInfiniteMovies };
