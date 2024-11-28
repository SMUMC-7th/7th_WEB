// useGetInfiniteMovies.js
import {
    DefaultError,
    InfiniteData,
    QueryKey,
    useInfiniteQuery,
    UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import {
    getCategoryMovie,
    TMovieTotalResponse,
    TMovieCategory,
} from '../../apis/movie';

function useGetInfiniteMovies(
    category: TMovieCategory,
    queryOptions?: UseInfiniteQueryOptions<
        TMovieTotalResponse,
        DefaultError,
        InfiniteData<TMovieTotalResponse, number>,
        TMovieTotalResponse,
        QueryKey,
        number
    >
) {
    return useInfiniteQuery({
        queryKey: ['categoryMovies', category],
        queryFn: ({ pageParam = 1 }): Promise<TMovieTotalResponse> =>
            getCategoryMovie(category, pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages): number | undefined => {
            const lastMovie = lastPage.results.at(-1);
            return lastMovie ? allPages?.length + 1 : undefined;
        },
        staleTime: 10000,
        enabled: !!category,
        ...queryOptions,
    });
}

export default useGetInfiniteMovies;
