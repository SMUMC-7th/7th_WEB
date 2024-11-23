import { useQuery } from "@tanstack/react-query";
import useGetMovies from "@/hooks/queries/useGetMovies";

const useGetPaginationMovie = ({ category, page }) => {
  return useQuery({
    queryKey: ["moviePagination", category, "page", page],
    queryFn: () => useGetMovies({ category, pageParam: page }),
    keepPreviousData: true,
  });
};

export default useGetPaginationMovie;
