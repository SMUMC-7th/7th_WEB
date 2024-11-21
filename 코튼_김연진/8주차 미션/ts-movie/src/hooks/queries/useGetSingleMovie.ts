import { useQuery } from '@tanstack/react-query';
import { getSingleMovie } from '../../apis/movie';
import { TMovieSingleResponse } from '../../apis/movie';

function useGetSingleMovie(movieID: string) {
    return useQuery<TMovieSingleResponse>({
        queryKey: ['movieId', movieID],
        queryFn: () => getSingleMovie(movieID || ''),
        enabled: !!movieID,
    });
}

export default useGetSingleMovie;
