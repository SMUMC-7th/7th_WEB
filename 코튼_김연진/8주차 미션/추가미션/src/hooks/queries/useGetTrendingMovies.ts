import { useQuery } from '@tanstack/react-query';
import { getTrendingMovie } from '../../apis/movie';
import { TMovieTotalResponse } from '../../apis/movie';

function useGetTrendingMovies() {
    return useQuery<TMovieTotalResponse>({
        queryKey: ['totalMovie'],
        queryFn: () => getTrendingMovie(),
    });
}

export default useGetTrendingMovies;
