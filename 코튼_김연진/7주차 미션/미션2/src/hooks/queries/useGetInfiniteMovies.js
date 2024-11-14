// useGetInfiniteMovies.js
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCategoryMovie } from '../../apis/movie';

function useGetInfiniteMovies(category) {
    return useInfiniteQuery({
        queryKey: ['categoryMovies', category],
        queryFn: ({ pageParam = 1 }) => getCategoryMovie(category, pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const lastMovie = lastPage.results.at(-1);
            return lastMovie ? allPages?.length + 1 : undefined;
        },
        cacheTime: 10000,
        staleTime: 10000,
        enabled: !!category,
    });
}

export default useGetInfiniteMovies;
