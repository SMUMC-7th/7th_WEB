import { useInfiniteQuery } from '@tanstack/react-query';
import { getCategoryMovie } from '../../apis/movie';
function useGetInfiniteMovies(category) {
    return useInfiniteQuery({
        queryFn: ({ pageParam }) => getCategoryMovie({ category, pageParam }),
        queryKey: ['movies', category],
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            console.log(lastPage, allPages);
        },
    });
}

export { useGetInfiniteMovies };
