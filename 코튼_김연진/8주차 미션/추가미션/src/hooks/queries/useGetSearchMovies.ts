import { useQuery } from '@tanstack/react-query';
import { getSearchMovie } from '../../apis/movie';
import { TMovieTotalResponse } from '../../apis/movie';

function useGetSearchMovies(mq: string) {
    return useQuery<TMovieTotalResponse>({
        queryKey: ['searchMovie', mq],
        queryFn: () => getSearchMovie(mq, 1),
        enabled: !!mq,
    });
}

export default useGetSearchMovies;
